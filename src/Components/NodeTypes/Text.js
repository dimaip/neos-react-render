const Text = ({node, attributes}) => (
    <div {...attributes}>
        {node.properties.text}
    </div>
);
export default Text;
