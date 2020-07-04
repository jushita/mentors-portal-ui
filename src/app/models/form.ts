export class Form {
    mentorName: string;
    date: string;
    message: string;
    constructor(mentorName: string, date: string, message: string) {
      this.mentorName = mentorName;
      this.date = date;
      this.message = message;
    }
  }