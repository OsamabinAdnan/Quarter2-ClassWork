import Image from "next/image";
import Card from "./Component/Card";
import Heading from "./Component/Heading";

export default function Home() {
  return (
    <>
    <div>
      <div>
        <Heading/>
      </div>
      <div className="flex flex-wrap mt-5 bg-yellow-100 w-100 justify-center">
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://img.freepik.com/free-photo/portrait-delighted-hipster-male-student-with-crisp-hair_176532-8157.jpg?t=st=1728556824~exp=1728560424~hmac=bcfb44649206273131913cfb84743a2c7bad417e46f063b22f1ab89d0f10cd0a&w=1380" alt="profile image" width={250} height={250} />
          <Card name="Osama" age={25} rollNo={556554} Class="Monday 2 to 5 PM"/>
        </div>
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://img.freepik.com/premium-photo/happy-pretty-gen-z-latin-smiling-girl-student-holding-backpack-notebooks-wearing-denim-jacket-looking-camera-standing-isolated-blue-background-advertising-education-course-portrait_1254992-209169.jpg?w=1380" alt="profile image" width={250} height={250} />
          <Card name="Sara" age={15} rollNo={465465} Class="Monday 2 to 5 PM"/>
        </div>
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://media.istockphoto.com/id/1449106027/photo/happy-smiling-female-college-student-looking-at-camera-holding-red-folder.jpg?s=612x612&w=0&k=20&c=7T9L6zx0BOTB-A2x366plM0PQWid1w9xKFlWDJlkCr8=" alt="profile image" width={250} height={250} />
          <Card name="Hiba" age={28} rollNo={545463} Class="Monday 2 to 5 PM"/>
        </div>
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://thumbs.dreamstime.com/b/successful-mexican-male-student-braces-classroom-university-166448604.jpg" alt="profile image" width={250} height={250} />
          <Card name="Ahmed" age={29} rollNo={987463} Class="Monday 2 to 5 PM"/>
        </div>
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://thumbs.dreamstime.com/b/student-shrugging-his-shoulder-single-colour-background-college-looking-confused-287234453.jpg" alt="profile image" width={250} height={250} />
          <Card name="Haroon" age={31} rollNo={654984} Class="Monday 2 to 5 PM"/>
        </div>
        <div className="box-border h-50 w-50 p-4 border-2 m-4 border-blue-900 rounded-xl bg-blue-200 hover:bg-blue-900 text-black hover:text-white shadow-slate-700 shadow-lg">
          <img className="box-border border-8 border-blue-900 rounded-full mb-4 mx-auto" src="https://st4.depositphotos.com/1049680/31607/i/450/depositphotos_316078476-stock-photo-african-american-student-man-wearing.jpg" alt="profile image" width={250} height={250} />
          <Card name="Jahanzaib" age={29} rollNo={656991} Class="Monday 2 to 5 PM"/>
        </div>
      </div>
    </div>
    
    </>
  );
}
