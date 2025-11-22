## Collections

### User Collections
`user` []
- `_id` (string, read-only): Unique identifier for the user collection.
- `name` (string): Name of the user collection.
- `emailId` (string): Email address associated with the user collection.
- `hashPassword` (string): Hashed password for the user collection.
- `refreshToken` (string): Token used for refreshing authentication sessions.
- `createdAt` (datetime, read-only): Timestamp when the user collection was created.
- `updatedAt` (datetime, read-only): Timestamp when the user collection was last updated
- `isActive` (boolean): Status indicating if the user collection is active.
- `roles` `[admin,user,doctor]` (array of strings): List of roles assigned to the user collection.
- `createdBy` (string): Identifier of the user who created this user collection.

### Admin Collections[Not to implememnt]
`admin`
- `_id` (string, read-only): Unique identifier for the admin collection.
- `name` (string): Name of the admin.
- `emailId` (string): Email address associated with the admin.
- `hashPassword` (string): Hashed password for the admin.
- `createdAt` (datetime, read-only): Timestamp when the admin was created.
- `roles` `[superadmin,admin,moderator]` (array of strings): List of roles assigned to the admin.
- `updatedAt` (datetime, read-only): Timestamp when the admin was last updated.


### Patients Collections
`patients`
- `_id` (string, read-only): Unique identifier for the patient collection.
- `firstName` (string): First name of the patient.
- `lastName` (string): Last name of the patient.
- `dateOfBirth` (date): Date of birth of the patient.
- `age` (number): Age of the patient.
- `gender` (string): Gender of the patient.
- `contactInfo` (object): Contact information of the patient, including phone number and address.
- `allergies` `[Name,fromDate,Medicine(array)]`(array of objects): List of medical history records for the patient.
- `Address` (string): Address of the patient.
- `consentToShareData` (boolean): Indicates if the patient has consented to share their data.
- `bloodType` (string): Blood type of the patient.
- `emergencyContact` (object): Emergency contact details for the patient, including name and phone number.
- `weight` (number): Weight of the patient in kilograms.
- `height` (number): Height of the patient in centimeters.

### Wellness Collections
`wellness`
- `_id` (string, read-only): Unique identifier for the wellness collection.
- `patientId` (string): Identifier linking to the patient collection.
- `date` (date): Date of the wellness record.
- `checkUpDate` (date): Date of the last check-up.
- `symptoms` (array of strings): List of symptoms reported by the patient.
- `sleepHours` (number): Average sleep hours per night.
- `steps` (number): Average daily steps taken by the patient.
- `activeTime` (number): Average daily active time in minutes.

### Reminders Collections
`reminders`
- `_id` (string, read-only): Unique identifier for the reminders collection.
- `patientId` (string): Identifier linking to the patient collection.
- `reminderType` (string): Type of reminder (e.g., medication, appointment).
- `message` (string): Reminder message content.
- `reminderDate` (datetime): Date and time for the reminder.
- `isCompleted` (boolean): Status indicating if the reminder has been completed.
- `goalId` (string): Identifier linking to the associated goal collection.
- `status` `[upcoming, completed, missed]`(string): Current status of the reminder (e.g., pending, completed).

### Goals Collections
`goals`
- `_id` (string, read-only): Unique identifier for the goals collection.
- `patientId` (string): Identifier linking to the patient collection.
- `assignedBy` (string): Identifier of the user who assigned the goal.
- `Title` (string): Title of the goal.
- `description` (string): Description of the goal.
- `targetDate` (date): Target date for achieving the goal.
- `status` (boolean): Status indicating if the goal has been achieved.
- `targetValue` (number): Target value for the goal (e.g., weight, steps).
- `unit` (string): Unit of measurement for the target value (e.g., kg, steps).
- `frequency` (string): Frequency of the goal (e.g., daily, weekly).
- `progress` (array of objects): List of progress updates for the goal, including date and value.
- `createdAt` (datetime, read-only): Timestamp when the goal was created.
- `updatedAt` (datetime, read-only): Timestamp when the goal was last updated.

### Provider Collections
`provider`
- `_id` (string, read-only): Unique identifier for the provider collection.
- `providerName` (string): Name of the healthcare provider.
- `specialization` (string): Area of specialization for the provider.
- `contactInfo` (object): Contact information of the provider, including phone number and address

### Services Collections
`services`
- `_id` (string, read-only): Unique identifier for the services collection.
- `serviceName` (string): Name of the healthcare service.
- `description` (string): Description of the healthcare service.
- `providerId` (string): Identifier linking to the provider collection.

### Appointments Collections
`appointments`
- `_id` (string, read-only): Unique identifier for the appointments collection.
- `patientId` (string): Identifier linking to the patient collection.
- `providerId` (string): Identifier linking to the provider collection.
- `serviceId` (string): Identifier linking to the services collection.
- `appointmentDate` (datetime): Date and time of the appointment.
- `status` `[scheduled, completed, canceled]` (string): Current status of the appointment.
- `notes` (string): Additional notes related to the appointment.

### Blog Collections
`blog`
- `_id` (string, read-only): Unique identifier for the blog collection.
- `title` (string): Title of the blog post.
- `content` (string): Content of the blog post.
- `providerId` (string): Identifier linking to the author (user) of the blog post.
- `tags` (array of strings): List of tags associated with the blog post.
- `publishedDate` (datetime): Date and time when the blog post was published.
- `isPublished` (boolean): Status indicating if the blog post is published.
- `comments` (array of objects): List of comments on the blog post, including commenter


