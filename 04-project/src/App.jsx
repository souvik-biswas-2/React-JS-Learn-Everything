import React from 'react'
import Card from './components/Card'

const bigTechJobs = [
  {
    brandLogo: "../public/meta.jpg",
    name: "Meta",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Menlo Park, CA"
  },
  {
    brandLogo: "../public/amazon.png",
    name: "Amazon",
    datePosted: "1 day ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Seattle, WA"
  },
  {
    brandLogo: "../public/apple.png",
    name: "Apple",
    datePosted: "2 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Cupertino, CA"
  },
  {
    brandLogo: "../public/netflix.png",
    name: "Netflix",
    datePosted: "1 day ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "Los Gatos, CA"
  },
  {
    brandLogo: "../public/google.png",
    name: "Google",
    datePosted: "2 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Mountain View, CA"
  },
  {
    brandLogo: "../public/microsoft.png",
    name: "Microsoft",
    datePosted: "1 day ago",
    post: "Azure Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Redmond, WA"
  },
  {
    brandLogo: "../public/nvdia.png",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Researcher",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Santa Clara, CA"
  },
  {
    brandLogo: "../public/meta.jpg",
    name: "Meta",
    datePosted: "1 day ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 65,
    location: "New York, NY"
  },
  {
    brandLogo: "../public/amazon.png",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "SDE Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Austin, TX"
  },
  {
    brandLogo: "../public/google.png",
    name: "Google",
    datePosted: "1 day ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 60,
    location: "Chicago, IL"
  }
];


const App = () => {
  return (
    <div className='parent'>
      {bigTechJobs.map(function(element){
        return <Card brandLogo={element.brandLogo} company={element.name} day={element.datePosted} role={element.post} tag1={element.tag1} tag2={element.tag2} salary={element.pay}  />
      })}
    </div>
  )
}

export default App