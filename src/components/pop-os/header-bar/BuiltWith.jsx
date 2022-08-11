import {
  IoLogoReact
} from "react-icons/io5";

const BuiltWith = () => {
  return (
    <div title="This site is built with React" className="flex items-center justify-center text-gray-300 hover:bg-gray-200 hover:bg-opacity-20 rounded-full p-1">
      <IoLogoReact className="w-5 h-5" />
    </div>
  )
}

export default BuiltWith