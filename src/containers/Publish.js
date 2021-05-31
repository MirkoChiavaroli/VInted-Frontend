import { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

const Publish = ({ userToken }) => {
  //   console.log(userToken);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [checkbox, setCheckbox] = useState(false);

  // var onChange >> Picture, Title, Brand, Size, Color, Condition, Location, Price, Submit
  const handlePicture = (event) => {
    const value = event.target.files[0];
    setPicture(value);
  };
  const handleTitle = (event) => {
    const value = event.target.value;
    setTitle(value);
  };
  const handleDescription = (event) => {
    const value = event.target.value;
    setDescription(value);
  };
  const handleBrand = (event) => {
    const value = event.target.value;
    setBrand(value);
  };
  const handleSize = (event) => {
    const value = event.target.value;
    setSize(value);
  };
  const handleColor = (event) => {
    const value = event.target.value;
    setColor(value);
  };
  const handleCondition = (event) => {
    const value = event.target.value;
    setCondition(value);
  };
  const handleLocation = (event) => {
    const value = event.target.value;
    setLocation(value);
  };
  const handlePrice = (event) => {
    const value = event.target.value;
    setPrice(value);
  };

  const handleSubmit = async (event) => {
    console.log(userToken);
    try {
      event.preventDefault();
      // requête vers le serveur
      // formData > chiedere Bastien
      const formData = new FormData();
      // form kles add (as Postaman)
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("location", location);
      formData.append("price", price);
      // richiesta serveur
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  return userToken ? (
    // HTML form
    <div className="publish">
      <div className="publishContainer">
        <h2 className="publisH2">Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div className="publishDetails">
            <input
              className="customFile"
              onChange={handlePicture}
              name="picture"
              type="file"
              placeholder="+ Ajoute une photo"
            ></input>
          </div>
          <div className="publishTiDe">
            <div className="publishTitle">
              <span>Titre</span>
              <input
                onChange={handleTitle}
                name="title"
                type="text"
                placeholder="ex : Chemise Sézane verte"
              />
            </div>
            <div className="publishDescription">
              <span>Décris ton article</span>
              <textarea
                onChange={handleDescription}
                name="description"
                type="text"
                placeholder="ex : porté quelques fois, taille correctement"
              />
            </div>
          </div>
          <div className="publishBrSiCoCoLo">
            <div className="publishBrand">
              <span>Marque</span>
              <input
                onChange={handleBrand}
                name="brand"
                type="text"
                placeholder="ex : Zara"
              />
            </div>
            <div className="publishSize">
              <span>Taille</span>
              <input
                onChange={handleSize}
                name="size"
                type="text"
                placeholder="ex : L/40/12"
              />
            </div>
            <div className="publishColor">
              <span>Couleur</span>
              <input
                onChange={handleColor}
                name="color"
                type="text"
                placeholder="ex : Fushia"
              />
            </div>
            <div className="publishCondition">
              <span>Etat</span>
              <input
                onChange={handleCondition}
                name="condition"
                type="text"
                placeholder="ex : Neuf avec étiquette"
              />
            </div>
            <div className="publishLocation">
              <span>Lieu</span>
              <input
                onChange={handleLocation}
                name="location"
                type="text"
                placeholder="ex : Paris"
              />
            </div>
          </div>
          <div className="publishPriCheck">
            <div className="publishPrice">
              <span>Prix</span>
              <input
                onChange={handlePrice}
                name="price"
                type="text"
                placeholder="0,00 €"
              />
            </div>
            <div className="publishCheck">
              <input
                className="check"
                type="checkbox"
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)}
              />
              {/* <span>Je suis intéressé(e) par les échanges</span> */}
            </div>
          </div>

          <input
            className="publishButton"
            type="submit"
            value="Ajouter"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default Publish;
