import React, { useState, useEffect } from 'react';
import Navi from './components/Navi';
import Categories from './components/Categories';
import Product from './components/Product';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from './components/CardDetail';
import Page404 from './components/Page404';

function App() {
  const [categoryName, setCatgoryName] = useState("");
  const [products, setproducts] = useState([]);
  const [sepet, setSepet] = useState([]);

  const ChangeCategory = (category) => {
    setCatgoryName(category.categoryName);
    getProducts(category.id);
  };

  const getProducts = async (catgory_id) => {
    let url = 'http://localhost:3000/products';
    if (catgory_id) {
      url += `?categoryId=${catgory_id}`;
    }
    const response = await fetch(url);
    const myData = await response.json();
    setproducts(myData);
  };

  const AddToCard = (product) => {
    setSepet([...sepet, product]);
    alertify.success(product.productName + " ürün Eklendi ! ");
  };

  const RemoveCard = (product) => {
    alertify.confirm(
      product.productName,
      'Ürün Silinsin mi ?',
      function () {
        const newSepet = sepet.filter(item => item.id !== product.id);
        setSepet(newSepet);
        alertify.success("İşlem Başarılı !");
      },
      function () {
        alertify.error("İşlem İptal Edildi !");
      }
    )
      .set('labels', { ok: 'Evet', cancel: 'Hayır' })
      .set('closable', false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BrowserRouter>


      <Container>
        <Row>
          <Navi sepet={sepet} RemoveCard={RemoveCard} />
        </Row>
        <Row>
          <Col sm={3}>
            <Categories ChangeCategory={ChangeCategory} categoryName={categoryName} />
          </Col>
          <Col sm={9}>
            <Routes>
              
              <Route path="/" element={<Product products={products} categoryName={categoryName} AddToCard={AddToCard} />} />
              <Route path="card-detail" element={<CardDetail sepet={sepet} RemoveCard={RemoveCard} />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Col>

        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
