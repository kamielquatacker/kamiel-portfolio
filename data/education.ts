export interface Education {
  id: string;
  school: string;
  degree: string;  // "Bachelor of Science"
  field: string;  // "Computer Science"
  period: string;
  logo: string;
  url?: string;
  description?: string;
  gpa?: string;
}

export const education: Education[] = [
  {
    id: "pxl",
    school: "PXL University of Applied Sciences",
    degree: "Graduate Diploma in Programming",
    field: "Software Development",
    period: "2022 - 2025",
    logo: "/logos/pxl.png",
    url: "https://pxl.be"
  }
];