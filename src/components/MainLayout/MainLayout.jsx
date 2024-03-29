import { clsx } from "clsx";
import { layoutWidth } from "../../helper/tailwindHelper";
import TaskContainer from "../TaskContainer/TaskContainer";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const MainLayout = () => {
    const { TaskDatas } = useContext(AppContext);

    return (
        <div className="p-3 h-screen">
            <div className="w-full mainlayouts border-[1px] overflow-hidden overflow-x-scroll border-t-2 ">
                <div
                    className={clsx(
                        `flex flex-row mb-10 gap-3  overflow-x-auto`
                    )}
                    style={{
                        width: layoutWidth(TaskDatas?.length, 360),
                    }}
                >
                    {TaskDatas?.map((task) => (
                        <TaskContainer key={task?._id} task={task} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
