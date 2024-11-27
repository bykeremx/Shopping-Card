import React, { useState , useEffect } from 'react';
import { ListGroup, Badge, ListGroupItem } from 'reactstrap';

export default function Categories(props) {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await fetch('http://localhost:3000/categories');
        const mydata = await response.json();
        setCategories(mydata);
    }
    useEffect(() => {
        getCategories();
      }, []); 
    return (
        <div className='mt-3'>
            <ListGroup flush className='shadow-sm'>
                <ListGroupItem>
                    <Badge color="dark" className='p-3 fs-2 w-100' >
                        Kategoriler - <Badge color="secondary" className='p-2 fs-1'>
                            {categories.length}
                        </Badge>
                    </Badge>
                </ListGroupItem>
                {categories.map((category) => (
                    <ListGroupItem
                        key={category.id}
                        href="#"
                        tag="a"
                        onClick={() => props.ChangeCategory(category)}
                    >
                        {category.categoryName}
                    </ListGroupItem>
                ))}
            </ListGroup>

            <Badge color="danger"  className='d-block my-2 p-3 shadow-sm fs-5'>
                {props.categoryName}
            </Badge>

        </div>
    );
}
