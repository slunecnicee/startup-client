import { useEffect, useState } from "react";
import { baseAPI } from "../../services/baseApi";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formdata.name === "" ||
      formdata.email === "" ||
      formdata.subject === "" ||
      formdata.message === "" ||
      !emailPattern.test(formdata.email)
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
   
    }
  }, [formdata]);

  
  const handleDisabled = (e) => {
    e.preventDefault();
      toast.error("გთხოვთ ყველა ველი სწორად შეავსეთ")
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formdata,
      [name]: value,
    });
  }

  const onSubmit=(e)=>{
      e.preventDefault();
      setLoading(true)
      baseAPI.post("/send/mail/send-email",formdata)
      .then((res)=>{
        toast.success("შეტყობინება წარმატებით გაიგზავნა");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }).catch((err)=>{
        toast.error("შეტყობინება ვერ გაიგზავნა ,გთხოვთ მოგვიანებით სცადოთ")
      }).finally(()=>{
        setLoading(false)
      })
  }

  return (
    <main className=" flex justify-center p-3 ">
      <form className="p-2  flex flex-col gap-5 border w-full lg:w-3/4 bg-white">
        <h3 className="p-4 text-xl font-bold text-textColor">კონტაქტი</h3>
        <div className="flex relative flex-col gap-2 mt-3 w-full">
          <label
            className="font-bold  text-sm text-gray-600 lb ml-5 p-1"
            htmlFor="name"
          >
            სახელი
          </label>
          <input
            className="p-3 border rounded-md  border-gray-300 focus:outline-emerald-600 focus-within:bg-white focus:bg-white"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required
            value={formdata.name}
          />
        </div>
        <div className="flex relative flex-col gap-2 mt-3 w-full">
          <label
            className="font-bold  text-sm text-gray-600 lb ml-5 p-1"
            htmlFor="email"
          >
            ელ-ფოსტა
          </label>
          <input
            className="p-3 border rounded-md  border-gray-300 focus:outline-emerald-600 focus-within:bg-white focus:bg-white"
            type="text"
            name="email"
            onChange={handleChange}
            id="email"
            required
            value={formdata.email}
          />
        </div>
        <div className="flex relative flex-col gap-2 mt-3 w-full">
          <label
            className="font-bold  text-sm text-gray-600 lb ml-5 p-1"
            htmlFor="subject"
          >
            თემა
          </label>
          <input
            className="p-3 border rounded-md  border-gray-300 focus:outline-emerald-600 focus-within:bg-white focus:bg-white"
            type="text"
            name="subject"
            onChange={handleChange}
            id="subject"
            required
            value={formdata.subject}
          />
        </div>
        <div className="flex relative flex-col gap-2 mt-3 w-full">
          <label
            className="font-bold  text-sm text-gray-600 lb ml-5 p-1"
            htmlFor="message"
          >
            მესიჯი
          </label>
          <textarea
            className="p-3 border rounded-md  border-gray-300 focus:outline-emerald-600 focus-within:bg-white focus:bg-white"
            type="text"
            name="message"
            onChange={handleChange}
            id="message"
            rows={5}
            required
            value={formdata.message}
          />
        </div>
       {
        disabled?(
          <button onClick={handleDisabled} className="p-3 rounded-xl bg-gray-400 text-white font-bold text-xl">გაგზავნა</button>
        ):<button 
            onClick={!loading ? onSubmit : null}
            className={`p-3 rounded-xl bg-textColor text-white font-bold text-xl ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}>{loading ? "იგზავნება..." : "გაგზავნა" }</button>
       }
      </form>
    </main>
  );
};

export default ContactPage;
