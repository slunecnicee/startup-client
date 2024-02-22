import DeleteIcon from "@mui/icons-material/Delete";

const Table = ({ members, handleDelete }) => {
  return (
    <>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200 w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
              >
                წაშლა
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b"
              >
                სახელი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                გვარი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                ელ-ფოსტა
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                როლი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                მობილურის ნომერი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                პირადი ნომერი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                დაბადების თარიღი
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-r"
              >
                LinkedIn
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {members.map((member, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <DeleteIcon />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.lastname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.position}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.idnumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.birthday}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b border-r">
                  {member.linkedin}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
