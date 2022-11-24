import { useParams } from "react-router-dom";
import MainLayout from "../templates/MainLayout";
import StyledProductPage from "../../styles/pages/StyledProductPage";
import ProductImage from "../UI/ProductImage";
import RadioButton from "../UI/RadioButton";
import Button from "../UI/Button";

export default function ProductPage() {
  const { productId } = useParams();
  const imageUrl =
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80";
  const productUrls = {
    route1: {
      url: "/",
      name: "Home",
    },
    route2: {
      url: `/product/${productId}`,
      name: "Name of product",
    },
  };
  return (
    <MainLayout
      title={`Product details: ${productId}`}
      urls={productUrls}
      backButton={true}
    >
      <StyledProductPage>
        <div className="image-col">
          <ProductImage src={imageUrl} width="100%" height="400" />
        </div>
        <div className="product-content-col">
          <section className="product-content-col--description">
            <h1>Descripción</h1>
            <p>Marca: </p>
            <p>Modelo: </p>
            <p>Precio: </p>
            <p>CPU: </p>
            <p>RAM: </p>
            <p>Sistema Operativo: </p>
            <p>Resolucion de pantalla: </p>
            <p>Bateria: </p>
            <p>Camaras: </p>
            <p>Dimensiones: </p>
            <p>Peso: </p>
          </section>
          <section className="product-content-col--actions">
            <h1>Selección</h1>
            <form className="form">
              <h3>Almacenamiento</h3>
              <div className="form--radio-group">
                <RadioButton id="60GB" name="storage" value="" />
                <RadioButton id="120GB" name="storage" value="" />
                <RadioButton id="250GB" name="storage" value="" />
              </div>
              <h3>Color</h3>
              <div className="form--radio-group">
                <RadioButton id="Azul" name="color" value="" />
                <RadioButton id="Plata" name="color" value="" />
                <RadioButton id="Negro" name="color" value="" />
              </div>
              <div className="form--buttons">
                <Button
                  type="submit"
                  classType="success"
                  text="Añadir a Carrito"
                />
              </div>
            </form>
          </section>
        </div>
      </StyledProductPage>
    </MainLayout>
  );
}
