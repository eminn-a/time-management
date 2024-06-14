import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import httpServices from '../../services/httpServices';
import { User } from '../../shared/types';
import Profile from './Profile/Profile';
import Table from './Table/Table';

export interface Project {
    id: number;
    projectName: string;
    projectStart: string;
    workedHours: number;
    salary: number;
}

export default function UserPage() {
    const [user, setUser] = useState<User | undefined>(undefined);
    const [projects, setProjects] = useState<Project[] | undefined>(undefined);
    const { id } = useParams<string>();
    useEffect(() => {
        const user: User = {
            username: 'JohnnySinsJr',
            firstName: 'John',
            lastName: 'Doe',
            userRole: 'Admin',
            status: 'аActive',
            createdAt: '12-13-2024',
            _id: '123123123',
        };
        setUser(user);
    }, []);

    useEffect(() => {
        const projects: Project[] = [
            {
                id: 1,
                projectName: 'Project 1',
                projectStart: '1/2/2024',
                workedHours: 10,
                salary: 1000,
            },
            {
                id: 2,
                projectName: 'Project 2',
                projectStart: '2/2/2024',
                workedHours: 20,
                salary: 2000,
            },
            {
                id: 3,
                projectName: 'Project 3',
                projectStart: '3/2/2024',
                workedHours: 30,
                salary: 3000,
            },
            {
                id: 4,
                projectName: 'Project 4',
                projectStart: '4/2/2024',
                workedHours: 40,
                salary: 4000,
            },
        ];

        setProjects(projects);
    }, []);

    return (
        <div className='flex flex-col p-8'>
            <Profile user={user} />
            <Table projects={projects} />
        </div>
    );
}
