import React, { useState, useEffect } from "react";
import { Main } from "./styles";
import Card from "../../components/Card";
import Detail from "../../components/Detail";
import Button from "../../components/Button";
import Title from "../../components/Title";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { allGain, totalGain, deleteGain } from "../../store/dashboard/actions";

function Wins() {
  const dispatch = useDispatch<Dispatch<ITypeSelect>>();
  const [open, setOpen] = useState<boolean>(false);
  const user: IUser = useSelector(
    (state: ApplicationService) => state.auth.user
  );
  const month: string = useSelector(
    (state: ApplicationService) => state.auth.month
  );
  const gain: Array<ListElement> = useSelector(
    (state: ApplicationService) => state.dashboard.gain
  );
  const total: number = useSelector(
    (state: ApplicationService) => state.dashboard.sumOfGain
  );

  useEffect(() => {
    dispatch(allGain({ userId: user.id, month }));
    dispatch(totalGain({ userId: user.id, month }));
  }, [dispatch, month, user.id]);

  useEffect(() => {
    gain && dispatch(totalGain({ userId: user.id, month }));
  }, [gain, dispatch, user.id, month]);

  const removeGain = (_id: string) => {
    dispatch(deleteGain(_id));
  };

  const handlerModal = (): void => {
    setOpen(!open);
  };

  return (
    <Main>
      <Card id="c1">
        <Title>Lucro</Title>
        <Button
          color={"default"}
          height={52}
          width={200}
          block={false}
          onClick={handlerModal}
        >
          Entrada
        </Button>
      </Card>
      <Card id="c2" color={"good"}>
        <Detail title="Saldo" value={total} />
      </Card>
      <Card id="li">
        <Table list={gain || []} remove={(_id: string) => removeGain(_id)} />
      </Card>
      <Modal
        open={open}
        title={"Adicionar lucro"}
        variant={"gain"}
        onClose={handlerModal}
      />
    </Main>
  );
}

export default Wins;
