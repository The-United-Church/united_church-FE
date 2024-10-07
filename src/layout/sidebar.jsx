import React, { useState } from "react";
import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { AiFillHome } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import "./styles/sidebar.css";
import { FaBusAlt, FaFileContract, FaHotel, FaMoneyCheck, FaSuitcase, FaUserCircle } from "react-icons/fa";
import { MdBusinessCenter, MdInventory, MdOfflineBolt, MdOutlinePlaylistRemove, MdOutlineWidgets } from "react-icons/md";
import { BsFillBuildingsFill, BsFillPersonVcardFill } from "react-icons/bs";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { GrHostMaintenance } from "react-icons/gr";
import { VscListUnordered } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import store from "../utilities/state_manager/store";

const Sidebar = () => {
const [expandMenu, setexpandMenu]=useState(true)
    store.subscribe(()=>{
      let state=store.getState()
      setexpandMenu(state.expandMenu)
    })
  const navigate=useNavigate();
  return (
    <div style={expandMenu?{ marginTop: "10px",width:'210px' }:{ marginTop: "10px"}}>
      <Box>
        {expandMenu?
        <SimpleTreeView>
          <TreeItem
            itemId="home"
            label={
              <div className="sidebarLabel">
                <AiFillHome />
                <span>Home</span>
              </div>
            }
          ></TreeItem>
          <TreeItem
            itemId="users"
            label={
              <div className="sidebarLabel">
                <FaUserCircle />
                <span>Users & Roles</span>
              </div>
            }
          ></TreeItem>
          <TreeItem
            itemId="logistics"
            label={
              <div className="sidebarLabel" onClick={()=>navigate('/logistics')}>
               <FaSuitcase />
                <span>Logistics</span>
              </div>
            }
          >
            <TreeItem
              itemId="accomodation"
              label={
                <div className="sidebarLabel">
                  <FaHotel></FaHotel>
                  <span>Accommodation</span>
                </div>
              }
            />
            <TreeItem
              itemId="transportation"
              label={
                <div className="sidebarLabel">
                  <FaBusAlt />
                  <span>Transportation</span>
                </div>
              }
            />
            <TreeItem
              itemId="trips"
              label={
                <div className="sidebarLabel">
                  <MdBusinessCenter />
                  <span>Trips</span>
                </div>
              }
            />
          </TreeItem>
          <TreeItem
            itemId="procurement"
            label={
              <div className="sidebarLabel" onClick={()=>navigate('/procurement')}>
                <MdOutlineWidgets />
                <span>Procurement</span>
              </div>
            }
          >
            <TreeItem
              itemId="vendor"
              label={
                <div className="sidebarLabel">
                  <BsFillPersonVcardFill />
                  <span>Vendors</span>
                </div>
              }
            />
            <TreeItem
              itemId="requisition"
              label={
                <div className="sidebarLabel">
                  <FaCartFlatbedSuitcase />
                  <span>Requisition</span>
                </div>
              }
            />
            <TreeItem
              itemId="purchaseOrder"
              label={
                <div className="sidebarLabel">
                  <FaMoneyCheck/>
                  <span>Purchase Orders</span>
                </div>
              }
            />
            <TreeItem
              itemId="expenses"
              label={
                <div className="sidebarLabel">
                  <MdOutlinePlaylistRemove />
                  <span>Expenses</span>
                </div>
              }
            />
            <TreeItem
              itemId="contracts"
              label={
                <div className="sidebarLabel">
                  <FaFileContract />
                  <span>Contracts</span>
                </div>
              }
            />
          </TreeItem>
          <TreeItem
            itemId="infrastructure"
            label={
              <div className="sidebarLabel">
                <BsFillBuildingsFill />
                <span>Infrastructure</span>
              </div>
            }
            onClick={()=>navigate('/infrastructure')}
          >
            <TreeItem
              itemId="inventory"
              label={
                <div className="sidebarLabel">
                  <MdInventory />
                  <span>Inventory</span>
                </div>
              }
            />
            <TreeItem
              itemId="energy"
              label={
                <div className="sidebarLabel">
                  <MdOfflineBolt />
                  <span>Energy Usage</span>
                </div>
              }
            />
            <TreeItem
              itemId="maintenance"
              label={
                <div className="sidebarLabel">
                  <GrHostMaintenance />
                  <span>Maintenance</span>
                </div>
              }
            />
            <TreeItem
              itemId="work-order"
              label={
                <div className="sidebarLabel">
                  <VscListUnordered />
                  <span>Work Order</span>
                </div>
              }
            />
          </TreeItem>
          <TreeItem
            itemId="tree-view-settings"
            label={
              <div className="sidebarLabel">
                <IoSettings />
                <span>Settings</span>
              </div>
            }
          />
        </SimpleTreeView>:
        <SimpleTreeView>
          <TreeItem
            itemId="home" title="Home"
            label={
              <div className="sidebarLabel">
                <AiFillHome style={{fontSize:'20px'}} />
              </div>
            }
          ></TreeItem>
          <TreeItem
            itemId="users" title="Users"
            label={
              <div className="sidebarLabel" >
                <FaUserCircle  style={{fontSize:'20px'}}/>
              </div>
            }
          ></TreeItem>
          <TreeItem
            itemId="logistics" title="Logistics"
            label={
              <div className="sidebarLabel" onClick={()=>navigate('/logistics')}>
               <FaSuitcase  style={{fontSize:'20px'}}/>
              </div>
            }
          >
          </TreeItem>
          <TreeItem
            itemId="procurement"
            title="Procurement"
            label={
              <div className="sidebarLabel">
                <MdOutlineWidgets  style={{fontSize:'20px'}}/>
              </div>
            }
          >
          </TreeItem>
          <TreeItem
          title="Infrastructure"
            itemId="infrastructure"
            label={
              <div className="sidebarLabel">
                <BsFillBuildingsFill  style={{fontSize:'20px'}}/>
              </div>
            }
            onClick={()=>navigate('/infrastructure')}
          >
          </TreeItem>
          <TreeItem
            itemId="tree-view-settings"
          title="Settings"
            label={
              <div className="sidebarLabel">
                <IoSettings  style={{fontSize:'20px'}} />
              </div>
            }
          />
        </SimpleTreeView>}
      </Box>
    </div>
  );
};

export default Sidebar;