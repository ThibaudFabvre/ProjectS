export const addDomElement = ({ ...props }) => {
    const { element, onClick = null, styles = null, content = '' } = props;
    return (
        <element onClick styles>
            {' '}
            {content}{' '}
        </element>
    );
};
