import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Prueba en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  //Todo lo que se necesita que se reinicialice, que queden con valores sean limpios
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "Hola";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("NO debe de postear la información OnSubmit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    //Simulando el input change
    const input = wrapper.find("input");
    const value = "Goku";
    input.simulate("change", { target: { value } });

    //Simulando el submit
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    //SetCategories debe de ser llamado
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toBeCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    //El valor del input debe de estar vacio
    expect(input.prop("value")).toBe("");
  });
});
