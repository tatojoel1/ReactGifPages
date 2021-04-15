import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const title = "Un titulo";
const url = "https://localhost/algo.jpg";
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("Pruebas en <GifGridItem />", () => {
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el titulo", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("CardImg");
    //console.log(img.props());
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe de tener animate__fadeIn", () => {
    const div = wrapper.find("Card");
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
