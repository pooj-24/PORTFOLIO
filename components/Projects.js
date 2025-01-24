export default function Projects() {
    const config = {
        projects: [
            {
                image: 'https://www.themobileindian.com/wp-content/uploads/2021/06/safe.jpeg', // Women Safety Application
                description: 'Women Safety Application using AI and Computer Vision for real-time alerts.',
                link: 'https://github.com/pooja/women-safety-app'
            },
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Indian-Food-wikicont.jpg', // Food Recommendation System
                description: 'Food Recommendation System using Machine Learning and Flask.',
                link: 'https://github.com/pooja/food-recommendation'
            },
            {
                image: 'https://img.freepik.com/free-vector/task-management-concept-illustration_114360-4126.jpg', // Task Management Tool
                description: 'Task Management Tool built with React and Node.js for efficient productivity tracking.',
                link: 'https://github.com/pooja/task-manager-app'
            }
        ]
    };

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>Here are some of my key projects. Check them out below:</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project, index) => (
                        <div className='relative' key={index}>
                            <img
                                className='h-[200px] w-[500px] object-cover rounded-lg'
                                src={project.image}
                                alt={`Project ${index + 1}`}
                            />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a
                                        className='btn bg-secondary text-white px-4 py-2 rounded hover:bg-white hover:text-secondary transition'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href={project.link}
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
