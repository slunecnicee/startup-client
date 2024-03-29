import { useNavigate } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
const UsaidPg = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/application/usaid");
  };

  return (
    <>
      <button
        onClick={handlenavigate}
        className="p-3 mt-10 pl-5 pr-5 hover:opacity-90   md:m-10 flex items-center gap-3 border-none  text-textColor font-bold text-xl"
      >
        <DescriptionIcon sx={{ color: "#4682b4", fontSize: "30px" }} />
        განაცხადის შევსება
      </button>
      <div className="w-full p-3 ">
        <div className="title mb-5 md:mb-0 border-b sm:border-none pb-2 md:pb-0 flex justify-start md:justify-center items-center md:m-3 md:ml-10 mr-10">
          <h2 className=" text-md font-bold  sm:text-lg  md:text-2xl text-textColor w-fit sm:pl-2 pr-2 bg-neutral-100 sm:font-medium  ">
            ახალი საწარმოები გამყოფი ზოლის მიმდებარე სოფლებში
          </h2>
        </div>

        <p className=" mt-3 sm:p-2 sm:text-lg text-md sm:mt-0">
          სტარტპ საქართველოს და პროექტი ზრდას ერთობლივი ახალი ინიციატივა
          გულისხმობს პირობითი საოკუპაციო ხაზის გასწვრივ მიმდებარე სოფლებში
          მოსახლეობას მიეცეს შესაძლებლობა დაიწყონ ინოვაციური, სიახლეებზე
          ორიენტირებული დამწყები ბიზნესები, ადგილზე მეტი საწარმოს და მეტი
          სამუშაო ადგილების შექმნის მიზნით.
        </p>
        <p className="sm:p-2 sm:text-lg text-md mt-3 sm:mt-0">
          ინიციატივის ძირითადი პრიორიტეტია ინოვაციური საწარმოების დაფინანსება.
          ბენეფიციარს მოეთხოვება მინიმალური ფულადი თანამონაწილეობა მხოლოდ 10%-ს
          ოდენობით, დარჩენილ 90%-ს დააფინანსებს სტარტაპ საქართველო შეღავათიანი
          გრძელვადიანი სესხით, ხოლო პროექტი ზრდა ბენეფიციარს აძლევს
          შესაძლებლობას აღნიშნული ჯამური თანხა გაუორმაგოს და გადასცეს უსასყიდლო
          გრანტის სახით.
        </p>
        <p className="sm:p-2 sm:text-lg text-md mt-3 sm:mt-0">
          მაგალითი: თუ სტარტაპ საქართველო სტარტაპს აფინანსებს 90 000 ლარით, ხოლო
          ბენეფიციარის თანამონაწილეობაა 10 000 ლარი, პროექტმა ზრდა შესაძლოა
          დააფინანსოს გრანტის სახით 90 000 + 10 000=100 000 ლარი. შესაბამისად
          ბიზნეს პროექტის ჯამური ბიუჯეტი იქნება:
        </p>
        <ul className="ml-8 sm:p-2 text-md sm:text-lg list-disc mt-3 sm:mt-0">
          <li>ბენეფიციარი: 10 000 ლარი</li>
          <li>სტარტაპ საქართველო: 90 000 ლარი</li>
          <li>პროექტი ზრდა: 100 000 ლარი</li>
        </ul>

        <p className="sm:p-2 sm:text-lg text-md mt-3 sm:mt-0">
          საიდანაც, პროექტი ზრდას გრანტი 100 000 ლარი გამოყენებული უნდა იყოს
          საწარმოსთვის ძირითადი საშუალებების შესაძენად. (დანადგარები და
          მოწყობილობები) USAID-Zrda-ს თანადაფინანსების მაქსიმარული ზღვრული თანხა
          არის 100,000 აშშ დოლარის ექვივალენტი ლარში.
        </p>
      </div>

      <div className="w-full p-3 ">
        <div className="title mb-5 md:mb-0 border-b sm:border-none pb-2 md:pb-0 flex justify-start md:justify-center items-center md:m-3 md:ml-10 mr-10">
          <h2 className=" text-sm font-bold  sm:text-lg  md:text-2xl text-textColor w-fit sm:pl-2 pr-2 bg-neutral-100 sm:font-medium  ">
            წინაპირობა და პროგრამის აღწერა
          </h2>
        </div>

        <p className="sm:p-2 sm:text-lg text-md mt-3 sm:mt-0">
          იმისათვის, რომ მიიღოთ ზრდა პროექტის თანადაფინანსება, აუცილებელია,
          პირველ რიგში განაცხადი შეიტანოთ სტარტაპ საქართველოს ოფიციალური
          ვებ-გვერდის მეშვეობით, ამ უკანასკნელის ინოვაციური კომპონენტის
          ფარგლებში და მონიშნოთ უჯრა, რომელიც ითვალისწინებს პროექტი ზრდას
          თანადაფინანსებაზე მოთხოვნას. გრანტის ძირითადი მიზნობრიობა უნდა იყოს
          ძირითადი საშუალებების (დანადგარები და ხელსაწყოები) დაფინანსება. <br />{" "}
          <br /> ანუ <b>USAID-Zrda</b> ბენეფიციარს შეუძენს ძირითად საშუალებებს,
          საოკუპაციო ხაზის გასწვრივ მდებარე სოფლებში ბიზნესების (საწარმოების)
          დასაფინანსებლად ჯამში 106 სოფელისათვის (იხ. დანართი) <b>USAID-Zrda</b>
          -ს მიერ გამოყოფილი ჯამური საგრანტო თანხა შეადგენს 500 000 აშშ დოლარს.{" "}
          <br /> <br />
          ზრდა პროექტის და სტარტაპ საქართველოს ერთობლივი პროგრამის ვადა - 2021
          წლის სექტემბრამდე პროექტი ზრდა საქართველოში წარმოადგენს ხუთწლიან
          პროგრამას, რომელიც მიზნად ისახავს ინკლუზიური და მდგრადი ეკონომიკური
          განვითარების ხელშეწყობას სამიზნე რეგიონებში შემდეგ ინიციატივების
          საფუძველზე: მიკრო, მცირე და საშუალო საწარმოების განვითარება, სოფლის
          მოსახლეობის შემოსავლების ზრდის ხელშეწყობა, მეწარმეებსა და მყიდველებს
          შორის საბაზრო ურთიერთობების ჩამოყალიბება და განვითარება და ადგილობრივი
          ეკონომიკური განვითარების ხელშეწყობა ბიზნესკავშირების დამყარებისა და
          გაძლიერების გზით. <br /> <br /> შედეგად, პროექტი ზრდა ხელს უწყობს
          ახალი სამუშაო ადგილების შექმნას და მიკრო, მცირე და საშუალო
          საწარმოებისა და შინამეურნეობებისათვის შემოსავლების ზრდას ადგილობრივი
          სამიზნე თემების გაძლიერების მიზნით. პროექტი ზრდა ხელს შეუწყობს
          ადგილობრივ მიკრო, მცირე და საშუალო მეწარმეებსა და ფერმერებს,
          განავითარონ პრიორიტეტული ეკონომიკური სექტორები გრანტების გაცემის,
          ტრენინგებისა და ტექნიკური დახმარების, ასევე ინვესტიციების მოზიდვისა და
          სოფლის მეურნეობისა და არასასოფლო-სამეურნეო პრიორიტეტულ სექტორებს შორის
          საბაზრო კავშირების განვითარების გზით.
        </p>
      </div>

      <div className="w-full p-3">
        <h2 className="text-sm font-bold  md:text-xl md:font-medium text-textColor p-2 border-b border-gray-300">
          ზრდა პროექტის თანადაფინასების მისაღებად საწარმოები უნდა
          აკმაყოფილებდნენ შემდეგ მოთხოვნებს და გაიარონ შემდეგი პროცედურები:
        </h2>

        <ul className="p-2 pl-8 text-sm md:text-lg list-disc">
          <li className="p-2">
            პირველ რიგში განაცხადი შეიტანონ სტარტაპ საქართველოს ოფიციალური
            ვებგვერდის მეშვეობით, ამ უკანასკნელის ინოვაციური კომპონენტის
            ფარგლებში და მონიშნონ უჯრა, რომელიც ითვალისწინებს პროექტი ზრდას
            თანადაფინასებაზე მოთხოვნას.
          </li>
          <li className="p-2">
            {" "}
            მიიღონ თანხმობა თანადაფინასებაზე სტარტაპ საქართველოსგან (ამ
            თანხმობის მიღების შემდეგ, საწარმოები მიიღებენ ზრდა პროექტის
            თანადაფინასების მოსაპოვებლად შესავსებ სააპლიკაციო ფორმას და სხვა
            დოკუმენტებს)
          </li>
          <li className="p-2">
            {" "}
            არსებულ ან მომავალ საწარმოში წილთა 100% უნდა იყოს ქართულ
            მფლობელობაში.
          </li>
          <li className="p-2">
            {" "}
            გრანტის გაცემის მომენტში, უნდა იყნენ ოფიციალურად რეგისტრირებული,
            როგორც შეზღუდული პასუხისმგებლობის საწარმო, საქართველოს
            კანონმდებლობის მიხედვით.
          </li>
          <li className="p-2">
            პროექტით გათვალისწინებული საწარმოს საქმიანობა უნდა განხორციელდეს
            გამყოფი ხაზის მიმდებარე სოფლებში (სულ 106 სოფელი - იხ. დანართი)
          </li>
          <li className="p-2">
            {" "}
            ზრდა პროექტის გრანტით გათვალისწინებული საქმოანობების განხორციელება
            უნდა დასრულდეს გრანტის მიღებიდან მაქსიმუმ 12 თვის განმავლობაში.
          </li>
        </ul>
      </div>

      <div className="p-3 w-full">
        <h2 className="text-sm font-bold  md:text-xl md:font-medium text-textColor p-2 border-b border-gray-300">
          ზრდა პროექტის გრანტის ფარგლებში მიღებული სახსრები არ შეიძლება
          გამოყენებულ იქნას შემდეგი აქტივობებისთვის:
        </h2>

        <ul className="p-2 pl-8 text-sm sm:text-md md:text-lg list-disc">
          <li className="p-2">
            მშენებლობა ან ნებისმიერი სახის ინფრასტრუქტურული საქმიანობა;
          </li>
          <li className="p-2">
            ცერემონიები, წვეულებები და სხვა პირადი სახის ღონისძიებები;
          </li>
          <li className="p-2">
            შეზღუდული საქონლის შესყიდვები, როგორიცაა სასოფლო-სამეურნეო საქონელი,
            ძრავიანი ავტოსატრანსპორტო საშუალებები, მათ შორის მოტოციკლები,
            ფარმაცევტული პრეპარატები და კონტრაცეპტივები, სამედიცინო აღჭურვილობა,
            მეორადი ტექნიკა/აღჭურვილობა. ზრდა პროექტის წინასწარი
            ნებართვის/თანხმობის გარეშე, USAID-ის რეგულაციების მიხედვით აკრძალული
            საქონელი, მათ შორის აბორტის მოწყობილობები და მომსახურებები,
            ფუფუნების საგნები და სხვა.
          </li>
          <li className="p-2">ალკოჰოლური სასმელები;</li>
          <li className="p-2">
            იმ საქონლის ან მომსახურებების შესყიდვა, რომელიც იზღუდება ან
            იკრძალება USAID-ის წარმოშობის/წარმოების ადგილის შესახებ რეგულაციის
            შესაბამისად (კუბა, ირანი, ჩრდილოეთ კორეა, და სირია);
          </li>
          <li className="p-2">
            ნებისმიერი შესყიდვა ან აქტივობა, რომელიც უკვე განხორციელდა;
          </li>
          <li className="p-2">
            {" "}
            შესყიდვები ან საქმიანობები, რომელთა შესრულება არ ემსახურება ზრდა
            პროექტის მიერ განსაზღვრულ საგრანტო მიზნების შესრულებას;
          </li>
          <li className="p-2">
            გრანტის მიმღების წინა (გრანტის მიღებამდე) ვალდებულებები და/ან
            ვალები, ჯარიმები, საურავები და პირგასამტეხლოები;
          </li>
          <li className="p-2">შემოწირულობების ფონდის ჩამოყალიბება;</li>
        </ul>

        <p className="p-2 text-sm md:text-lg">
          მეტი ინფორმაციის მოსაღებად ZRDA-ს თანადაფინანსების შესახებ ეწვიეთ
          მისამართს:{" "}
          <a
            className="text-red-300 hover:text-red-400 text-lg "
            href="https://zrda.ge"
          >
            {" "}
            მისამართი
          </a>
        </p>
      </div>
    </>
  );
};

export default UsaidPg;
