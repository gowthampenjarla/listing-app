import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Routes } from "react-router";
import HouseList from "./HouseList.js";
import Message from "./placeListing/Message.js";
import PlaceListing from "./placeListing/PlaceListing.js";
import PostRoomMateAd from "./PostRoomMateAd.js";
import PropertyDetails from "./PropertyDetails.js";
import RoomMateFinder from "./RoomMateFinder.js";
import SearchBar from "./SearchBar.js";
import SideBarAction from "./SideBarAction.js";
import "./style/Dashboard.scss";

const Dashboard = (props) => {
  return (
    <>
      <Container fluid>
        {/* <Top /> */}
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideBarAction className="mt-5" />
          </Col>
          <Col xs={10} id="page-content-wrapper" className="mt-4">
            <SearchBar />
            <Routes>
              <Route path="/" element={<HouseList />} />
              <Route
                path="/bookmarks"
                element={<HouseList isBookmark={true} />}
              />
              <Route path="/single" element={<HouseList type="single" />} />
              <Route
                path="/apartment"
                element={<HouseList type="apartment" />}
              />
              <Route
                path="/townhouse"
                element={<HouseList type="townhouse" />}
              />
              <Route path="/listaplace" element={<PlaceListing />} />
              <Route path="/propertydetails" element={<PropertyDetails />} />
              <Route path="/roommatefinder" element={<RoomMateFinder />} />
              <Route path="/postAd" element={<PostRoomMateAd />} />
              <Route path="/message" element={<Message />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
