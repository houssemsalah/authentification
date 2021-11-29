import React, { useState } from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import TableItems from "./TableItems";

const Tables = ({ typee }) => {
  // const list = useSelector((state) => state.itemSlice.itemList);

  const [menuList, setMenuList] = useState("");
  const handleAll = () => setMenuList("");
  const handlePizza = () => setMenuList("pizza");
  const handleDrink = () => setMenuList("drink");
  const handlePlat = () => setMenuList("plat");
  const handleSandwiche = () => setMenuList("sandwiche");







  
  return (
    <>
      <section className="ftco-menu" style={{marginTop:"100px",marginBottom:"-100px"}}>
        <div className="container-fluid">
          <div className="row d-md-flex">
            <div className="col-lg-12  p-md-5">
              <div className="row">
                <div
                  className="col-md-12 nav-link-wrap mb-5 d-flex "
                  style={{
                    justifyContent: "center",
                    marginBottom: 0,
                    paddingBottom: 0,
                  }}
                >
                  <div className="nav  nav-pills" aria-orientation="vertical">
                    <a className="nav-link " onClick={handleAll}>
                      All
                    </a>
                    <a
                      className="nav-link "
                      onClick={handlePlat}
                      aria-selected="true"
                    >
                      Plats
                    </a>
                    <a
                      className="nav-link"
                      onClick={handlePizza}
                      aria-selected="false"
                    >
                      Pizzas
                    </a>
                    <a
                      className="nav-link"
                      onClick={handleSandwiche}
                      aria-selected="false"
                    >
                      Sandwiches
                    </a>
                    <a
                      className="nav-link"
                      onClick={handleDrink}
                      aria-selected="false"
                    >
                      Boissons
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "100px", marginBottom: "100px" }}>
        <Container
          style={{
            marginLeft: "100px",
            marginRight: "100px",
            paddingLeft: "200px",
            paddingRight: "200px",
          }}
        >
          <Card
            style={{ backgroundImage: " url(/images/bg_4.jpg)" }}
            borderColor="#fac564"
          >
            <Card.Body>
              <Table hover>
                <thead>
                  <tr>
                    <th>
                      <h5 style={{ Color: "orange" }}>ID</h5>
                    </th>
                    <th style={{ Color: "#fac564" }}>
                      <h5>Product</h5>
                    </th>
                    <th style={{ Color: "#fac564" }}>
                      <h5>Price</h5>
                    </th>
                    <th style={{ Color: "#fac564" }}>
                      <h5>Description</h5>
                    </th>
                    <th>
                      <h5>Action</h5>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {list
                    .filter((item) => item.type.includes(menuList)  )
                    .map((item) => (
                      <TableItems item={item} />
                    ))} */}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Tables;
