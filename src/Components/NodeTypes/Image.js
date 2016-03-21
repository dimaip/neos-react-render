const Image = ({node, attributes}) => (
    <figure {...attributes}>
        <img alt={node.properties.title} href={node.properties.image} />
        <figcaption>{node.properties.caption}</figcaption>
    </figure>
);
export default Image;
