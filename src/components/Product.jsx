import React from "react";
import { Table, Badge, Container, Row ,Button } from "reactstrap";

export default function Product(props) {
  return (
    <Container>
      <Row>
        <Badge color="primary p-3 m-3 w-100 fs-2">
          Product - <b>{props.categoryName}</b>
        </Badge>
      </Row>

      {/* Tablo */}
      <Row>
        <Table bordered hover responsive className="shadow-sm mt-3">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Birim Fiyatı</th>
              <th>Birim Sayısı</th>
              <th>Stok</th>
              <th>Sepete Ekle</th>
            </tr>
          </thead>
          <tbody>
            {props.products.length > 0 ? (
              props.products.map((product, index) => (
                <tr key={product.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{product.productName}</td>
                  <td>

                    <Badge color="dark p-2 d-block">
                      {product.unitPrice} ₺
                    </Badge>
                  </td>
                  <td>{product.quantityPerUnit}</td>
                  <td><Badge color="danger d-block">
                    {product.unitsInStock}
                  </Badge></td>
                  <td>
                    <Button color="warning" onClick={()=>props.AddToCard(product)}>
                        Sepete Ekle
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Ürün bulunamadı.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
