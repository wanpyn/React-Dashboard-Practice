function DropDownMenu() {
  return (
    <>
      <ul
        className="flex gap-3 absolute top-11 right-3 flex-col border border-solid border-gray-300
       bg-normal-white rounded pl-2 pr-6 pt-3 pb-3 bg-white text-sky-blue cursor-pointer text-xs"
      >
        <li>Profile</li>
        <li>Change Password</li>
        <li>Logout</li>
      </ul>
    </>
  );
}
export default DropDownMenu;
