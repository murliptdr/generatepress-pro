import { styled, connect, useConnect, } from "frontity";
import React, { useState } from "react";
import Link from "./link";
import Down from '../Assets/img/down-arrow.png'
/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu } = state.theme;
  const isThereLinks = menu?.items?.length > 0;
  const [visible, setVisible] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  const MenuToggle = () => {
    setVisible((current) => !current);
  };

  const SubMenuToggle = () => {
    setSubmenu((current) => !current);
  };

  return (
    <>

      <div {...props}>
        {state.frontity.mode !== "amp" && <MenuOverlay />}
        <MenuContent as="nav">
          {/* {isThereLinks &&
          menu?.items?.map((val) => (
            <MenuLink
              key={val.title}
              link={val.url}
              aria-current={state.router.link === val.url ? "page" : undefined}
            >
              {val.title}
            </MenuLink>
          ))} */}

          <div className="mob_menu_main">
            <ul>

              <li className="parent_div">

                <p className="parent_menu" onClick={MenuToggle}>
                 <Link to="/"> Menu 1 </Link>
                  <img className={visible ? "icn_rotate " : "icn_rotate_transi"} src={Down} />
                </p>
                <ul className={visible ? "sub_menu_ul" : "d-none"}>
                  <li className="submenu_main">
                    <p className="sub_menu_a" onClick={SubMenuToggle}>
                    <Link to="/"> Sub item 1 </Link>
                      <img className={submenu ? "icn_rotate " : "icn_rotate_transi"} src={Down} />
                    </p>
                    <ul className={submenu ? "sub_menu_inner" : "d-none"}>
                      <Link className="sub_menu_a" to="#">
                        sub menu inner
                      </Link>
                    </ul>

                  </li>
                  <li>
                    <Link to="#"> Sub item 2 </Link>
                  </li>
                </ul>


              </li>

              <li className="single_menu_item">
                <Link to="#"> menu 2 </Link>
              </li>

            </ul>
          </div>


        </MenuContent>
      </div>
    </>
  );



};



const MenuOverlay = styled.div`
  background-color: #212121;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: relative;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
  }
`;

export default connect(MenuModal, { injectProps: false });
