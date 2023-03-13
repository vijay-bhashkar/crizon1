export const getWeekDay = (week) => {
    switch (week) {
      case 0:
        return 'Sun';
        break;
      case 1:
        return 'Mon';
        break;
      case 2:
        return 'Tue';
        break;
      case 3:
        return 'Wed';
        break;
      case 4:
        return 'Thu';
        break;
      case 5:
        return 'Fri';
        break;
      case 6:
        return 'Sat';
        break;
      default:
        break;
    }
  };
  

  export const getMonthName = (month) => {
    switch (month) {
    case 1: return "Jan";
        break;
    case 2: return "Feb";
        break;
    case 3: return "Mar";
        break;
    case 4: return "Apr";
        break;
    case 5: return "May";
        break;
    case 6: return "Jun"; 
        break;
    case 7: return "Jul";
        break;
    case 8: return "Aug";
        break;
    case 9: return "Sept";
        break;
    case 10: return "Oct";
        break;
    case 11: return "Nov";
        break;
    case 12: return "Dec";
        break;
    }
  };