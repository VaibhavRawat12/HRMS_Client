import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from 'react'

export default function Employees() {

  // empData -> live values currently being typed into whichever form is open
  let [empData, setEmpdata] = useState({});
  // empFormData -> the "saved" record that gets displayed in the table
  let [empFormData, setEmpFormData] = useState({});

  let [openModal, setOpenModal] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpdata({ ...empData, [name]: value });
  };

  // Add: save empData as the new record, close Add modal, clear the form
  let handleClick = () => {
    setEmpFormData(empData);
    setOpenModal(false);
    setEmpdata({});
  };

  // Edit: save empData (which was pre-filled from empFormData) back into empFormData
  let handleEditClick = () => {
    setEmpFormData(empData);
    setOpenEditModal(false);
  };

  // Open the Add modal with a blank form
  let handleAddOpen = () => {
    setEmpdata({});
    setOpenModal(true);
  };

  // Open the Edit modal pre-filled with the current saved record
  let handleEditOpen = () => {
    setEmpdata(empFormData);
    setOpenEditModal(true);
  };

  let handleDelete = () => {
    setEmpFormData({});
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardAction>
            <div className='text-end'>
              <button
                className="h-10 w-auto px-4 border-2 border-white-800 rounded-2xl bg-blue-800 text-white"
                onClick={handleAddOpen}
              >
                Add Employee
              </button>
            </div>

            {/* Add Employee Modal */}
            <Dialog open={openModal} onOpenChange={setOpenModal}>
              <DialogContent className="h-150 overflow-scroll">
                <DialogHeader>
                  <DialogTitle className="text-center">Employee Form</DialogTitle>
                  <DialogDescription>
                    <div>
                      <label className='font-bold text-black'>Emp id</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee ID'
                        name="EmpID"
                        value={empData.EmpID || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Name</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Name'
                        name="EmpName"
                        value={empData.EmpName || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp email</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="email"
                        placeholder=' Enter the Employee Email'
                        name="EmpEmail"
                        value={empData.EmpEmail || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Phone</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="tel"
                        placeholder=' Enter the Employee Phone'
                        name="EmpPhone"
                        value={empData.EmpPhone || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Address</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Address'
                        name="EmpAddress"
                        value={empData.EmpAddress || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp DOB</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Employee Date of Birth'
                        name="EmpDOB"
                        value={empData.EmpDOB || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Joining Date</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="date"
                        placeholder=' Enter the Joining Date'
                        name="EmpJoiningDate"
                        value={empData.EmpJoiningDate || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp Department</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee Department'
                        name="EmpDepartment"
                        value={empData.EmpDepartment || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <label className='font-bold text-black'>Emp designation</label>
                    </div>
                    <div>
                      <input
                        className="w-full h-8 border-2 border-black rounded-md"
                        type="text"
                        placeholder=' Enter the Employee designation'
                        name="EmpDesignation"
                        value={empData.EmpDesignation || ""}
                        onChange={handleChange}
                      />
                    </div>

                    <div className='mt-5'>
                      <button
                        className="h-10 w-25 border-2 bg-red-500 text-white font-bold rounded-2xl mr-2"
                        onClick={() => setOpenModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="w-25 bg-blue-500 text-white h-8 rounded-3xl"
                        onClick={handleClick}
                      >
                        Submit
                      </button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>

        <CardContent>
          {/* Table JSX */}
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300">Emp ID</th>
                <th className="border border-gray-300">Emp Name</th>
                <th className="border border-gray-300">Emp Email</th>
                <th className="border border-gray-300">Emp Phone</th>
                <th className="border border-gray-300">Emp Address</th>
                <th className="border border-gray-300">Emp DOB</th>
                <th className="border border-gray-300">Date of Joining</th>
                <th className="border border-gray-300">Department</th>
                <th className="border border-gray-300">Designation</th>
                <th className="border border-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>
              {empFormData && empFormData.EmpID ? (
                <tr>
                  <td className="border border-gray-300">{empFormData.EmpID}</td>
                  <td className="border border-gray-300">{empFormData.EmpName}</td>
                  <td className="border border-gray-300">{empFormData.EmpEmail}</td>
                  <td className="border border-gray-300">{empFormData.EmpPhone}</td>
                  <td className="border border-gray-300">{empFormData.EmpAddress}</td>
                  <td className="border border-gray-300">{empFormData.EmpDOB}</td>
                  <td className="border border-gray-300">{empFormData.EmpJoiningDate}</td>
                  <td className="border border-gray-300">{empFormData.EmpDepartment}</td>
                  <td className="border border-gray-300">{empFormData.EmpDesignation}</td>
                  <td className="border border-gray-300">
                    <button
                      className="h-8 w-20 border-2 border-white-400 rounded-2xl bg-blue-800 text-white mr-2"
                      onClick={handleEditOpen}
                    >
                      Edit
                    </button>
                    <button
                      className="h-8 w-20 border-2 rounded-2xl bg-red-500 text-white"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="border border-gray-300 text-center py-4" colSpan={10}>
                    No employee records yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Edit Employee Record Modal */}
      <Dialog open={openEditModal} onOpenChange={setOpenEditModal}>
        <DialogContent className="h-150 overflow-scroll">
          <DialogHeader>
            <DialogTitle className="text-center">Edit Employee Form</DialogTitle>
            <DialogDescription>
              <div>
                <label className='font-bold text-black'>Emp id</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="text"
                  placeholder=' Enter the Employee ID'
                  name="EmpID"
                  value={empData.EmpID || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp Name</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="text"
                  placeholder=' Enter the Employee Name'
                  name="EmpName"
                  value={empData.EmpName || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp email</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="email"
                  placeholder=' Enter the Employee Email'
                  name="EmpEmail"
                  value={empData.EmpEmail || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp Phone</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="tel"
                  placeholder=' Enter the Employee Phone'
                  name="EmpPhone"
                  value={empData.EmpPhone || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp Address</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="text"
                  placeholder=' Enter the Employee Address'
                  name="EmpAddress"
                  value={empData.EmpAddress || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp DOB</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="date"
                  placeholder=' Enter the Employee Date of Birth'
                  name="EmpDOB"
                  value={empData.EmpDOB || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp Joining Date</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="date"
                  placeholder=' Enter the Joining Date'
                  name="EmpJoiningDate"
                  value={empData.EmpJoiningDate || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp Department</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="text"
                  placeholder=' Enter the Employee Department'
                  name="EmpDepartment"
                  value={empData.EmpDepartment || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <label className='font-bold text-black'>Emp designation</label>
              </div>
              <div>
                <input
                  className="w-full h-8 border-2 border-black rounded-md"
                  type="text"
                  placeholder=' Enter the Employee designation'
                  name="EmpDesignation"
                  value={empData.EmpDesignation || ""}
                  onChange={handleChange}
                />
              </div>

              <div className='mt-5'>
                <button
                  className="h-10 w-25 border-2 bg-red-500 text-white font-bold rounded-2xl mr-2"
                  onClick={() => setOpenEditModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="w-25 bg-blue-500 text-white h-8 rounded-3xl"
                  onClick={handleEditClick}
                >
                  Submit
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}