import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <>
            <div id='Projects' className="p-10 md:p-24 text-white">
                <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
                <div className="py-12 px-8 flex flex-wrap gap-5">
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non  "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    {/* <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/>
                    <ProjectCard title='Bloggin Websie' main="Lorem ipsum dolor sit amet consectetur adipisicing elit. In iure non , "/> */}
                </div>
                
                
            </div>
        </>
    )
}

export default Projects