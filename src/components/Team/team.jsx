const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Matthew Jacobs',
        role: 'Co-Founder',
        imageUrl:
          'https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q',
      },
      {
        name: 'Archie Andrews',
        role: 'Co-CEO',
        imageUrl:
          'https://cadc.auburn.edu/wp-content/uploads/2019/06/003A42924-scaled.jpg-480x480-1655933050.jpg',
      },
      {
        name: 'Leslie Philips',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://www.pgclegal.com.au/wp-content/uploads/2018/09/Resize-PGC2229A1849-meg-hansen-photography-2-480x480.jpg',
      },
      {
        name: 'Rose Sharon',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://www.yogalaff.com/wp-content/uploads/2019/05/partner-yoga-poses-for-two-people-480x480.jpg',
      },
      {
        name: 'Caspie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://c4ads.org/wp-content/uploads/2022/04/DJ-1-480x480.jpg',
      },
    // More people...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  