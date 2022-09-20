/**
 * Card wrapper component
 * 
 * @param {*} content 
 * @returns 
 */
const Card = ({content}) => {
    
    return (
        <div className="mx-10 my-10">
            <div className={'card'}>
                {content}
            </div>
        </div>

    );
};

export default Card;
