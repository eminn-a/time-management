import { Project } from '../../shared/types';
import ButtonDelete from '../../UI/formComponents/ButtonDelete';
import ButtonEdit from '../../UI/formComponents/ButtonEdit';
import ButtonRefund from '../../UI/formComponents/ButtonRefund';
import ButtonReport from '../../UI/formComponents/ButtonReport';

export default function ProjectCard({ project }: { project: Project }) {
    const colorStatus = `${project.projectStatus === 'In Progress' ? 'text-green-600' : project.projectStatus === 'Done' ? 'text-blue-600' : 'text-gray-300'}`;

    return (
        <>
            <div className='text-surface shadow-secondary-1 dark:bg-surface-dark background-color max-w block rounded-lg border dark:text-white'>
                <div className='border-b-2 px-6 py-3 text-black dark:rounded-t-lg dark:bg-gray-900 dark:text-white'>
                    Client name: {project.clientName}
                </div>
                <div className='p-6  text-black dark:bg-gray-900'>
                    <h5 className='mb-2 text-xl font-medium leading-tight dark:text-white'>
                        Project name: {project.projectName}
                    </h5>
                    <p className='text-base text-black dark:text-white'>
                        Team: {project.listOfEmployees.join(', ')}
                    </p>
                    <p className='text-black  dark:text-white'>
                        Starting date {project.startingDate} days ago.
                    </p>
                </div>
                <div className='border-t-2 px-6 py-3 dark:rounded-b-lg dark:bg-gray-900'>
                    <p className={`${colorStatus} mr-5 inline-block`}>
                        Status: {project.projectStatus}.
                    </p>
                    {project.projectStatus === 'In Progress' ? (
                        <ButtonDelete children='Delete' />
                    ) : (
                        ''
                    )}
                    {project.projectStatus === 'In Progress' ? <ButtonEdit children='Edit' /> : ''}
                    {project.projectStatus === 'Archived' ? <ButtonRefund children='Refund' /> : ''}
                    {project.projectStatus === 'Done' ? <ButtonReport children='Report' /> : ''}
                </div>
            </div>
        </>
    );
}