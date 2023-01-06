// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { useSelector } from 'react-redux';


import cheerio from "cheerio";
type Data = {
    Day: string, Time: {
        Former: string,
        Hall: string
    }[]
}[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Get the value from redux
    // const groupValue = useSelector((state) => state.value)
    // console.log(groupValue);
    // Get All Groups from "www.nticrabat.com"'s select menu.
    let TargetURL = "https://nticrabat.com/";

    // get group id from get request
    const GroupID = req.query.GroupID;


    // return json


    let dayIndex = 0;

    // Send Get Request to the Website - Retrieve data as HTML
    const { data } = await axios.get(TargetURL + "/emploi/timetable/index.php?groupe=" + GroupID);

    let FormattedData: { Day: string, Time: any }[] = [];

    data.forEach((element: any, index: number) => {
        let DayObject: { Day: string, Time: any } = { Day: "", Time: [] };

        // Get Day Name
        DayObject.Day = element.jour;

        // if Day name is not in Formatted Data objects
        if (!FormattedData.find((e) => e.Day === element.jour)) {
            DayObject.Day = element.jour;
            dayIndex = FormattedData.findIndex((e) => e.Day === element.jour);
            // Push the new time to the object
            let TimeObject: {
                Former: string,
                Hall: string
            } = {
                Former: "",
                Hall: ""
            };

            TimeObject.Former = element.prof;
            TimeObject.Hall = element.etat;

            DayObject.Time.push(TimeObject);

            return FormattedData.push(DayObject);
        } else {
            // if Day name is in Formatted Data objects
            // Get the index of the object
            dayIndex = FormattedData.findIndex((e) => e.Day === element.jour);
            // Push the new time to the object
            let TimeObject: {
                Former: string,
                Hall: string
            } = {
                Former: "",
                Hall: ""
            };

            TimeObject.Former = element.prof;
            TimeObject.Hall = element.etat;

            FormattedData[dayIndex].Time.push(TimeObject);
        }
    });

    // Function to switch Day name from "Mon."" to "Lundi" in french.
    function SwitchDayName(DayName: string) {
        switch (DayName) {
            case "Mon.":
                return "Lundi";
            case "Tues.":
                return "Mardi";
            case "Wed.":
                return "Mercredi";
            case "Thurs.":
                return "Jeudi";
            case "Fri.":
                return "Vendredi";
            case "Sat.":
                return "Samedi";
            case "Sun.":
                return "Dimanche";
            default:
                return DayName;
        }
    }

    // Filter Formatted Data object Day name
    FormattedData.forEach((element) => {
        element.Day = SwitchDayName(element.Day);
        element.Time.forEach((TimeObject: { Former: string, Hall: string }) => {
            TimeObject.Former = TimeObject.Former != "" ? "Prof. " + TimeObject.Former : "";
        });
    });



    res.status(200).json(FormattedData);
}
