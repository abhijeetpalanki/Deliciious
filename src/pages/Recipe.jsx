import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonWrapper>

        {activeTab === "instructions" ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        ) : (
          activeTab === "ingredients" && (
            <ul>
              {details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          )
        )}
      </Info>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    h2 {
      text-align: center;
    }

    img {
      margin-bottom: 2rem;
    }
  }

  h2 {
    margin-bottom: 2rem;
  }

  h3 {
    font-size: 1rem;
  }

  ul {
    margin-top: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;

  @media (max-width: 1200px) {
    margin: 0;
  }
`;

export default Recipe;
