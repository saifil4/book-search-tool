import Card from '@/components/Card';

const CardList = ({ bookList }) => {
    return (
        <ul className='card-list'>
            {bookList?.map((item, index) => (
                <Card key={index} item={item} />
            ))}
        </ul>
    )
}

export default CardList;