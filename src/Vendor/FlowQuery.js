(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.neos = factory());
}(this, function () { 'use strict';

	var normalizeContextItem = (contextItem => {
	    if (typeof contextItem === 'string') {
	        return contextItem;
	    }

	    if (typeof contextItem.contextPath === 'string') {
	        return contextItem.contextPath;
	    }

	    console.error('[FlowQueryAPI]: Received an invalid FlowQuery context', contextItem);
	    console.error('[FlowQueryAPI]: A FlowQuery context must either be a string, an object with a contextPath property or an array of those items.');
	})

	//
	// FlowQuery `children` operation
	//
	var children = ((configuration, request) => filter => forward => {
	    request.chain.push({
	        type: 'children',
	        filter
	    });

	    return forward(request);
	})

	//
	// FlowQuery `closest` operation
	//
	var closest = ((configuration, request) => filter => forward => {
	    request.chain.push({
	        type: 'closest',
	        filter
	    });

	    return forward(request);
	})

	//
	// FlowQuery `count` finisher
	//
	var count = ((configuration, request) => () => (forward, dispatch) => {
	    request.finisher = 'count';

	    return dispatch(request);
	})

	//
	// FlowQuery `filter` operation
	//
	var filter = ((configuration, request) => filter => forward => {
	    request.chain.push({
	        type: 'filter',
	        filter
	    });

	    return forward(request);
	})

	//
	// FlowQuery `find` operation
	//
	var find = ((configuration, request) => filter => forward => {
	    request.chain.push({
	        type: 'find',
	        filter
	    });

	    return forward(request);
	})

	//
	// FlowQuery `get` finisher
	//
	var get = ((configuration, request) => index => (forward, dispatch) => {
	    request.finisher = 'get';

	    if (index !== undefined) {
	        request.finisherArguments = [index];
	    }

	    return dispatch(request);
	})

	//
	// FlowQuery `is` finisher
	//
	var is = ((configuration, request) => filter => (forward, dispatch) => {
	    request.finisher = 'is';
	    request.finisherArguments = [filter];

	    return dispatch(request);
	})

	//
	// FlowQuery `parents` operation
	//
	var parent = ((configuration, request) => () => forward => {
	    request.chain.push({
	        type: 'parent'
	    });

	    return forward(request);
	})

	//
	// FlowQuery `parents` operation
	//
	var parents = ((configuration, request) => filter => forward => {
	    request.chain.push({
	        type: 'parents',
	        filter
	    });

	    return forward(request);
	})

	//
	// FlowQuery `property` finisher
	//
	var property = ((configuration, request) => propertyName => (forward, dispatch) => {
	    request.finisher = 'property';
	    request.finisherArguments = [propertyName];

	    return dispatch(request);
	})

	//
	// FlowQuery `shape` operation
	//
	var shape = ((configuration, request) => shape => forward => {
	    request.chain.push({
	        type: 'shape',
	        shape
	    });

	    return forward(request);
	})

	const operations = {
	    children,
	    closest,
	    count,
	    filter,
	    find,
	    get,
	    is,
	    parent,
	    parents,
	    property,
	    shape
	};

	const createDispatch = configuration => request => {
		return fetch(configuration.endpoints.query, {
			method: 'POST',
			body: JSON.stringify({
				q: request,
				finisher: request.finisher,
				finisherArguments: request.finisherArguments
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json());
	};

	const initializeChainedInterface = (configuration, request) => Object.keys(operations).reduce((chainedInterface, operationName) => {
		const operation = operations[operationName](configuration, request);
		chainedInterface[operationName] = (...args) => {
			const rechain = operation(...args);
			return rechain(request => initializeChainedInterface(configuration, request), createDispatch(configuration));
		};

		return chainedInterface;
	}, {});

	var createFlowQueryAPI = (configuration => {
		const q = context => {
			if (!Array.isArray()) {
				context = [context];
			}

			return initializeChainedInterface(configuration, {
				context: context.map(normalizeContextItem),
				chain: []
			});
		};

		return { q };
	})

	var index = createFlowQueryAPI({
	    endpoints: {
	        query: 'http://localhost:3000/query'
	    }
	});

	return index;

}));
