import React from 'react';
import { Container, Row, Col, Table, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import './Invoice.css';

const Invoice = ({ sepet , RemoveCard}) => {
    // Toplam tutarı hesaplamak için bir fonksiyon
    let toplam = 0;
    sepet.map((product) => (
        toplam += parseInt(product.unitPrice)  // toplam değişkenine ürün fiyatlarını topla
      ))

    return (
        <Container className="invoice-container">
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h2">Ürünler</CardTitle>
                            <Table bordered responsive>
                                <thead>
                                    <tr>
                                        <th>Kategori</th>
                                        <th>Adı</th>
                                        <th>Fiyat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sepet.map((product) => (
                                        <tr key={product.id}>
                                            <td>{product.categoryId}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.unitPrice}₺</td>
                                            <td>
                                                <Button color='danger w-100'onClick={()=>RemoveCard(product)}>
                                                    Ürünü Sil
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag="h2">Toplam</CardTitle>
                            <CardText className="text-right"><strong>Toplam Tutar:</strong> { toplam } ₺</CardText>
                        </CardBody>
          </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Invoice;
