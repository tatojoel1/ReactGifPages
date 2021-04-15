import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Prueba en el hook useFetchGifs", () => {

  test("Debe de retornar el estado inicial", async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toEqual(true);
  });

  test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Goku"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  
});
