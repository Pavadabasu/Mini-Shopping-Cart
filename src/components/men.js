import '../components/list.css';
const Men = ({ products , add }) => {
    return (
        <div className='prod'>
             {products.map((item)=>(
                    <div className="item" key={item.id}>
                        <img id="image" src={item.image} alt={item.name} height={480} width={300} />
                        <h4 id='name'>{item.name}</h4>
                        <div className='abc'>
                        <h4 id='cost'>${item.cost}</h4>
                        <button id="butn" onClick={()=>add(item)}>Add to cart</button>
                        </div>
                    </div>
                ))}

        </div>

    );
}

export default Men;