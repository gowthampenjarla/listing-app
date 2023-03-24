import React from "react";

import { useNavigate } from "react-router-dom";
import SidebarMenu from "react-bootstrap-sidebar-menu";

import "./style/Dashboard.scss";
import {
  Bookmark,
  CaretDown,
  HouseAdd,
  HouseDoor,
  PlusLg,
  Postage,
  Search,
} from "react-bootstrap-icons";

const SideBarAction = () => {
  const navigate = useNavigate();

  const handleOnClick = (link) => {
    console.log(link);
    navigate(link);
  };

  return (
    <div>
      <SidebarMenu.Body>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link onClick={() => handleOnClick("/")}>
            <SidebarMenu.Nav.Icon>
              <HouseDoor />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>Home</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link onClick={() => handleOnClick("/bookmarks")}>
            <SidebarMenu.Nav.Icon>
              <Bookmark />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>Bookmarks</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle>
              <SidebarMenu.Nav.Icon>
                <CaretDown />
              </SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>Find a place</SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link onClick={() => handleOnClick("/single")}>
                  <SidebarMenu.Nav.Icon>
                    <PlusLg />
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Single-family</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link
                  onClick={() => handleOnClick("/apartment")}
                >
                  <SidebarMenu.Nav.Icon>
                    <PlusLg />
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Apartments</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link
                  onClick={() => handleOnClick("/townhouse")}
                >
                  <SidebarMenu.Nav.Icon>
                    <PlusLg />
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>Townhouses</SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link onClick={() => handleOnClick("/listaplace")}>
            <SidebarMenu.Nav.Icon>
              <HouseAdd />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>List your place</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link
            onClick={() => handleOnClick("/roommatefinder")}
          >
            <SidebarMenu.Nav.Icon>
              <Search />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>Roommate finder</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
        <SidebarMenu.Nav>
          <SidebarMenu.Nav.Link onClick={() => handleOnClick("/postAd")}>
            <SidebarMenu.Nav.Icon>
              <Postage />
            </SidebarMenu.Nav.Icon>
            <SidebarMenu.Nav.Title>Post Roommate Ad</SidebarMenu.Nav.Title>
          </SidebarMenu.Nav.Link>
        </SidebarMenu.Nav>
      </SidebarMenu.Body>
    </div>
  );
};

export default SideBarAction;
