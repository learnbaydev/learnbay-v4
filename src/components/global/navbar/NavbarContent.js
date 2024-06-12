import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { menuItem } from "./NavbarData";
const Button = dynamic(() => import("../button/Button"));
const Tabs = dynamic(() => import("../tabs/Tabs"));

const NavbarContent = ({ adPage, setPopups, DMD, careerportalbtn }) => {
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState(false);

  const handleIcon = (data) => {
    setIcon(data);
  };
  const showMenu = () => {
    setShow(!show);
  };
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 481) {
      setMobile(true);
    }
    if (width > 481) {
      setMobile(false);
    }
  }, []);
  const popupShow = () => {
    setPopups(true);
  };
  return (
    <div className={styles.nav}>
      <div
        className={`${styles.widthContainer} flexBox flexJustSpaceBetween flexAlignCenter`}
      >
        <div className={`${styles.left} flexBox flexAlignCenter `}>
          {adPage ? (
            ""
          ) : (
            <>
              <FaBars
                className={styles.ham}
                onClick={() => {
                  showMenu();
                  setIcon(false);
                }}
              />
              <div className={show ? styles.mobileWrapper : styles.hide}>
                <div className={styles.mobileMenu}>
                  {" "}
                  {menuItem.map((data) => {
                    const { id, name, url } = data;
                    return (
                      <span onClick={showMenu} key={id}>
                        <Link href={url}>{name}</Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {adPage ? (
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
              alt="Learnbay"
              quality={100}
              priority
              style={{ objectFit: "contain" }}
              width={mobile ? "135" : "230"}
              height={60}
            />
          ) : (
            <Link href="/" className={styles.logo}>
              <div className="imgWrapper ">
                <Image
                  src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/learnbayMain/learnbay-logo.png"
                  alt="Learnbay"
                  quality={100}
                  style={{ objectFit: "contain" }}
                  priority
                  width={mobile ? "135" : "230"}
                  height={60}
                />
              </div>
            </Link>
          )}

          <>
            {adPage ? (
              ""
            ) : (
              <div
                onMouseEnter={() => setIcon(true)}
                onMouseOver={() => setIcon(true)}
                onClick={() => {
                  setIcon(!icon);
                  setShow(false);
                }}
                className="flexBox"
              >
                <Button
                  text="Courses"
                  passIcon={icon ? <FaChevronUp /> : <FaChevronDown />}
                />
              </div>
            )}
          </>

          {icon ? (
            <div
              className={styles.megaMenu}
              onMouseOver={() => setIcon(true)}
              onMouseLeave={() => setIcon(false)}
            >
              <Tabs handleIcon={handleIcon} />
            </div>
          ) : (
            ""
          )}
        </div>
        {DMD ? (
          <div
            className={`${styles.righta} flexBox flexAlignCenter flexJustSpaceBetween`}
          >
            <Link
              href="https://zoom.us/webinar/register/WN_OXUJK-K6SoWhu-ncQGLtrw"
              target="_blank"
            >
              <div>
                <Button text="Register Now" outline={true} />
              </div>
            </Link>
          </div>
        ) : (
          <>
            {adPage ? (
              <div
                className={`${styles.righta} flexBox flexAlignCenter flexJustSpaceBetween`}
              >
                <div onClick={popupShow}>
                  <Button text="Apply for Counselling" outline={true} />
                </div>
              </div>
            ) : (
              <div
                className={`${styles.right} flexBox flexAlignCenter flexJustSpaceBetween`}
              >
                {adPage
                  ? ""
                  : menuItem.map((data) => {
                      const { id, name, url } = data;
                      return (
                        <span key={id}>
                          <Link href={url}>{name}</Link>
                        </span>
                      );
                    })}

                {careerportalbtn ? (
                  ""
                ) : (
                  <div onClick={popupShow}>
                    <Button text="Apply for Counselling" outline={true} />
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(NavbarContent);
