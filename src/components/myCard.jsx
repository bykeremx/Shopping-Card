import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function MyCard(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(props.sepet);
  let toplam = 0;
  props.sepet.map((product) => (
    toplam += parseInt(product.unitPrice)  // toplam değişkenine ürün fiyatlarını topla
  ))
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Sepetim - <Badge color="dark">
          {props.sepet.length}

        </Badge>
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>Sepetim ! </ModalHeader>
        <ModalBody>
          <ListGroup>
            {props.sepet.map((product) => (
              <ListGroupItem key={product.id} className="d-flex justify-content-between align-items-center">
                <span>
                  <Button color="danger" onClick={()=>props.RemoveCard(product)}>
                    X
                  </Button>
                </span>
                <span>{product.productName}</span>
                <span className="badge badge-primary text-dark badge-pill">{product.unitPrice} ₺</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ModalBody>

        <ModalFooter>
          <Badge color="dark w-100 shadow-lg ">
            <h5>Toplam Hesap : {toplam} ₺</h5>
          </Badge>
          <Button color="primary">
            <Link to="card-detail" className='text-light underline-none shadow-sm w-100'>Dinamik Faturayi Gör ! </Link>
          </Button>
          <Button color="secondary" onClick={toggle}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MyCard;
