import "./timeLine.css"
import Header from "../../components/header/Header";
import useSWR from "swr";
import { fetcher } from "../../services/services";
import { sortDatetimeAsc, sortDatetimeDesc } from "../../utils";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { useState } from "react";


export default function TimeLine() {
  const { data, isLoading } = useSWR("http://localhost:3001/timeLine", fetcher);
  const [order, setOrder] = useState("desc");

  function handleOrderDatetime(array, sortOrder) {
    if (sortOrder === "asc") {
      return sortDatetimeAsc(array);
    } else if (sortOrder === "desc") {
      return sortDatetimeDesc(array);
    }
  }


  if (isLoading) return <h2>Loading...</h2>
  return (
    <div className="containerTimeLine">
      <Header />
      <Menu closeOnSelect={true}>
        <MenuButton
          as={Button}
          colorScheme='blue'
          backgroundColor={"#0F293A"}
          margin={"40px"}
          size={"lg"}
        >
          Ordenar por
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='desc' title='Ordem' type='radio' onChange={(e) => setOrder(e)}>
            <MenuItemOption value='desc'>Mais recente</MenuItemOption>
            <MenuItemOption value='asc'>Mais antigo</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
        </MenuList>
      </Menu>
      <section>
        {handleOrderDatetime(data, order)?.map((datetime) => (
          <div key={datetime.id}>
            <h2>{datetime.datetime}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}