function DropDownMenu() {
  return (
    <>
      <ul
        className="flex absolute top-20 right-12 flex-col gap-3 border border-solid border-gray-300
       bg-normal-white rounded pl-2 pr-6 pt-3 pb-3 text-sky-blue cursor-pointer "
      >
        <li>Profile</li>
        <li>Change Password</li>
        <li>Logout</li>
      </ul>
    </>
  );
}
export default DropDownMenu;
