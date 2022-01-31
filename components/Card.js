import Image from "next/image";
import Ribbon from "./Ribbon";
import IconBtn from "./IconBtn";
import FormatIcon from "./FormatIcon";

import {
  FaEye,
  FaShoppingCart,
  FaPhone,
  FaShare,
  FaWhatsapp,
  FaDownload,
  FaBook,
} from "react-icons/fa";
import { AiFillUsb } from "react-icons/ai";
import { SiBmcsoftware } from "react-icons/si";

const Card = ({ product }) => {
  const facultyName = product.facultyName;
  const subject = product.subject;
  const format = product.format;
  const studyMaterial = product.studyMaterial;
  const exam = product.exam;
  const courseType = product.courseType;
  const productName = `${exam} ${subject} ${courseType}`;
  const price = product.price;
  const lecture = product.lecture;
  const duration = product.duration;
  const views = product.views;
  const validity = product.validity;
  const combo = false;

  return (
    <div className="card">
      {combo && <Ribbon />}
      <section className="sec1">
        <div className="faculty">
          <Image
            src={`/images/teachers/${facultyName}.jpg`}
            height={85}
            width={85}
            alt="teacher image"
            className="facultyImg"
          />
          <h5 className="facultyName">{facultyName}</h5>
        </div>
        <div className="product">
          <h3 className="productName">{productName}</h3>
          <h4 className="productCategory">{`${exam}/ ${courseType}`}</h4>
          <h4 className="finalCost">{`₹ ${price}`}</h4>
          <h4 className="originalCost">{`₹ ${
            price + parseInt((10 / 100) * price)
          }`}</h4>
        </div>
      </section>

      <p className="off">10% OFF</p>
      <table>
        <tr>
          <th>Lecture</th>
          <th>Duration</th>
          <th>Views</th>
          <th>Validity</th>
        </tr>
        <tr>
          <td>{lecture}</td>
          <td>{`${duration} Hrs`}</td>
          <td>{`${views}X`}</td>
          <td>{`${validity} Months`}</td>
        </tr>
      </table>
      <section className="format">
        <div>
          <h5>Videos: </h5>
          {format === "USB" ? (
            <FormatIcon icon={<AiFillUsb />} color="#007D9C" title="USB" />
          ) : (
            <FormatIcon
              icon={<FaDownload />}
              color="#007D9C"
              title="Download"
            />
          )}

          <h5>Study Material:</h5>
          {studyMaterial === "Hardbook" ? (
            <FormatIcon icon={<FaBook />} color="#41BC14" title="Hardcopy" />
          ) : (
            <FormatIcon
              icon={<SiBmcsoftware />}
              color="#41BC14"
              title="Softcopy"
            />
          )}
        </div>
      </section>
      <div className="actionLinks">
        <ul>
          <IconBtn icon={<FaEye />} color="#EBA300" link="#" />
          <IconBtn icon={<FaShoppingCart />} color="#34567B" link="#" />
          <IconBtn icon={<FaPhone />} color="#2468AD" link="#" />
          <IconBtn icon={<FaShare />} color="#02A4E8" link="#" />
          <IconBtn icon={<FaWhatsapp />} color="#2AB200" link="#" />
        </ul>
      </div>
    </div>
  );
};

export default Card;
