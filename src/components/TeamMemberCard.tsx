import React from 'react'
import {motion} from "framer-motion"
type team_member_info = {
    image:any;
    member_name:string;
    position:string;
    course:string;
    description:string;
}
const TeamMemberCard = ({image,member_name,position,course,description}:team_member_info) => {
  return (
          <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        whileHover={{translateY: -5}}
        className="bg-white shadow-md rounded-2xl p-8 hover:shadow-blue-300/40 transition "
      >
        <img
          src={`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/
            2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/
            RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//
            AABEIAJQA3gMBIgACEQEDEQH/
            xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/
            xAA4EAABBAEDAgQEBQIEBwAAAAABAAIDEQQFEiExUQYTQWEiMnGBB0KRocGx0SMzYnIUFSRDUuHw/
            8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/
            8QAIREBAQADAAICAwEBAAAAAAAAAAECAxESITFBMkJREwT/
            2gAMAwEAAhEDEQA/
            AOvpFKSF8l9EqQmhEJFJ0gKhVSKUqQgjSSmlSCFIKkVi6jm42n4kmVmSiOKMWSf6V6lOfQtIUdwBAsWegXkuv+O9R1Iyx4cjsPHJ4LDUjm/
            UdPt+q5aWXIfIXyTSSOIprnSkn9SV2x0W/blluk+H0Iil4bpfi/
            XNIc3ZmPnhHBhndvFdr6her+FfEuH4jw/
            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
            T+FVqjXY+qwSRPLWyzRn7lwB/
            Zb76Z52t7ikz50jyeI2bQs8+30WLgx7GyEjlzrWR60tRiqsghrmDsLWJmOryHdyVKZ5kyHMHqaVWq018MfZBk6a27eo57rc36rJxY9kAvrSw8r4pa7IjMZzGPoq5OoTiN0FTkP2ztB6EFBVkmgPqtbqZc7EDmfNG+1l6lMIYGvd3APstc55fBKPy8AI05rxbJfhbJv5mSsJB9PiC22q5TI/
            DkmUXMdIzDDgwnlxoHotJrY87RdaB5EbQ8D/bR/
            havwnONVmyMfIJMckgkmvk+UwCox7E/wArLfPTtsF7pNHwo3H4vJDnn3K6DDbswwOi1jWbYmkgNc/
            kgenYLbwiscBWMX2xfUoCcg+JILzbJzJ6dd7ikmFEKS5uiYTUQFJEV2mUIWG0bTtCFUbbEAGIwjqRZRlE+WfohC92H4x4svyciw+X4hcW/
            ngO77OVevkuxGknkOFHtyhCz+q/s6qB5LOVe3oT60hC6RmtdgfFkOLuTyqssl+qRB3RCEG2Hy/
            Za1/OSbQhEZEJ+JYupkiSIjruQhUYmugO0519wtZiOL8FhchCiz4c3rjzHpGWG/8AflMb/
            wDaRR/ZY2g4UOF4y1DHxwREGsAb7cFCFz+3X6ehOAJFrYN4iCELo4seXqqwhC8+/wCY76fs/VSBQhcXdMJpIRH/2Q==`}
          alt="CEO"
          className="w-40 h-40 mx-auto rounded-full mb-6 shadow-md object-cover"
        />
        <h3 className="text-xl font-semibold text-blue-700">{member_name}</h3>
        <p className="text-gray-500 mb-2">{position}</p>
        <p className="text-gray-600 text-sm mb-2">{course}</p>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </motion.div>
  )
}

export default TeamMemberCard
