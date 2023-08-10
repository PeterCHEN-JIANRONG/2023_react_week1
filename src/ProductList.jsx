import { useState } from "react";

const ProductList = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: "珍珠奶茶",
      description: "香濃奶茶搭配QQ珍珠",
      price: 50,
      count: 20,
    },
    {
      id: 2,
      name: "冬瓜檸檬",
      description: "清新冬瓜配上新鮮檸檬",
      price: 45,
      count: 18,
    },
    {
      id: 3,
      name: "翡翠檸檬",
      description: "綠茶與檸檬的完美結合",
      price: 55,
      count: 34,
    },
    {
      id: 4,
      name: "四季春茶",
      description: "香醇四季春茶，回甘無比",
      price: 45,
      count: 10,
    },
    {
      id: 5,
      name: "阿薩姆奶茶",
      description: "阿薩姆紅茶搭配香醇鮮奶",
      price: 50,
      count: 25,
    },
    {
      id: 6,
      name: "檸檬冰茶",
      description: "檸檬與冰茶的清新組合",
      price: 45,
      count: 20,
    },
    {
      id: 7,
      name: "芒果綠茶",
      description: "芒果與綠茶的獨特風味",
      price: 55,
      count: 18,
    },
    {
      id: 8,
      name: "抹茶拿鐵",
      description: "抹茶與鮮奶的絕配",
      price: 60,
      count: 20,
    },
  ]);

  const [editText, setEditText] = useState("");
  const [editIndex, setEditIndex] = useState(0);

  // 減少數量
  const handleSub = (e) => {
    const { index } = e.target.dataset;
    const newList = [...list];
    if (newList[index].count > 0) {
      newList[index].count -= 1;
    }
    setList(newList);
  };

  // 編輯
  const handleEdit = (e) => {
    const { index } = e.target.dataset;
    setEditIndex(index);
    setEditText(list[index].name);
  };

  // 刪除
  const handleDelete = (e) => {
    const { index } = e.target.dataset;
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>
                  <small>{item.description}</small>
                </td>
                <td>{item.price}</td>
                <td>
                  <div className="option">
                    <button data-index={index} onClick={handleSub}>
                      -
                    </button>
                    <span className="count">{item.count}</span>
                    <button
                      onClick={() => {
                        // 方法一: forEach
                        // const newList = [...list];
                        // newList.forEach((newItem) => {
                        //   if (newItem.id === item.id) {
                        //     newItem.count++;
                        //   }
                        // });

                        // 方法二: map
                        // const newList = list.map((newItem) => {
                        //   if (newItem.id === item.id) {
                        //     newItem.count++;
                        //   }
                        //   return newItem;
                        // });

                        // 方法三: map 進階
                        // const newList = list.map((newItem) => {
                        //   return newItem.id === item.id
                        //     ? {
                        //         ...newItem,
                        //         count: newItem.count + 1,
                        //       }
                        //     : newItem;
                        // });

                        // 方法四: 利用 index
                        const newList = [...list];
                        newList[index].count++;
                        setList(newList);
                      }}
                    >
                      +
                    </button>
                    <button
                      data-index={index}
                      type="button"
                      onClick={handleEdit}
                    >
                      編輯
                    </button>
                    <button
                      data-index={index}
                      type="button"
                      onClick={handleDelete}
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      {editText ? (
        <div className="editBlock">
          <label htmlFor="name">品項名稱</label>
          <input
            type="text"
            id="name"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            id="saveBtn"
            type="button"
            onClick={() => {
              const newList = [...list];
              newList[editIndex].name = editText;
              setList(newList);
              setEditText("");
            }}
          >
            儲存
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ProductList;
