export function formatScheduleTypeToReadable(scheduleType) {
  switch (scheduleType) {
    case "LvSick":
      return "Sick Leave";
    case "LvAnnual":
      return "Annual Leave";
    case "LvParental":
      return "Parental Leave";
    case "LvBereaved":
      return "Bereavement Leave";
    case "LvPaid":
      return "Paid Leave";
    case "LvUnpaid":
      return "Unpaid Leave";
    case "LvSpecial":
      return "Special Leave";
    case "LvMedical":
      return "Medical Leave";
    case "LvStudy":
      return "Study Leave";
    case "LvOther":
      return "Other Leave";

    case "ObConference":
      return "Official Business - Conference";
    case "ObBusinessMeeting":
      return "Official Business - Business Meeting";
    case "ObClientMeeting":
      return "Official Business - Client Meeting";
    case "ObSiteVisit":
      return "Official Business - Site Visit";
    case "ObContract":
      return "Official Business - Contract";
    case "ObTraining":
      return "Official Business - Training";
    case "ObPresentation":
      return "Official Business - Presentation";
    case "ObOther":
      return "Official Business - Other";

    case "OVERTIME":
      return "Over Time";
    case "UNDERTIME":
      return "Under Time";
  }
}
