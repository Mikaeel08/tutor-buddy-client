/*
 * Student Tutor Booking Management System
 * This is a system allowing students and tutors to book in-person sessions at designated venues on campus.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: 222641495@mycput.ac.za
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.63
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from './ApiClient';
import AdminDTO from './model/AdminDTO';
import BookingDTO from './model/BookingDTO';
import LocationDTO from './model/LocationDTO';
import ReviewDTO from './model/ReviewDTO';
import StudentDTO from './model/StudentDTO';
import SubjectDTO from './model/SubjectDTO';
import TutorDTO from './model/TutorDTO';
import UserDTO from './model/UserDTO';
import AdminApi from './api/AdminApi';
import BookingApi from './api/BookingApi';
import LocationApi from './api/LocationApi';
import ReviewApi from './api/ReviewApi';
import StudentApi from './api/StudentApi';
import SubjectApi from './api/SubjectApi';
import TutorApi from './api/TutorApi';

/**
* This_is_a_system_allowing_students_and_tutors_to_book_in_person_sessions_at_designated_venues_on_campus_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var StudentTutorBookingManagementSystem = require('index'); // See note below*.
* var xxxSvc = new StudentTutorBookingManagementSystem.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new StudentTutorBookingManagementSystem.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new StudentTutorBookingManagementSystem.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new StudentTutorBookingManagementSystem.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdminDTO model constructor.
     * @property {module:model/AdminDTO}
     */
    AdminDTO,

    /**
     * The BookingDTO model constructor.
     * @property {module:model/BookingDTO}
     */
    BookingDTO,

    /**
     * The LocationDTO model constructor.
     * @property {module:model/LocationDTO}
     */
    LocationDTO,

    /**
     * The ReviewDTO model constructor.
     * @property {module:model/ReviewDTO}
     */
    ReviewDTO,

    /**
     * The StudentDTO model constructor.
     * @property {module:model/StudentDTO}
     */
    StudentDTO,

    /**
     * The SubjectDTO model constructor.
     * @property {module:model/SubjectDTO}
     */
    SubjectDTO,

    /**
     * The TutorDTO model constructor.
     * @property {module:model/TutorDTO}
     */
    TutorDTO,

    /**
     * The UserDTO model constructor.
     * @property {module:model/UserDTO}
     */
    UserDTO,

    /**
    * The AdminApi service constructor.
    * @property {module:api/AdminApi}
    */
    AdminApi,

    /**
    * The BookingApi service constructor.
    * @property {module:api/BookingApi}
    */
    BookingApi,

    /**
    * The LocationApi service constructor.
    * @property {module:api/LocationApi}
    */
    LocationApi,

    /**
    * The ReviewApi service constructor.
    * @property {module:api/ReviewApi}
    */
    ReviewApi,

    /**
    * The StudentApi service constructor.
    * @property {module:api/StudentApi}
    */
    StudentApi,

    /**
    * The SubjectApi service constructor.
    * @property {module:api/SubjectApi}
    */
    SubjectApi,

    /**
    * The TutorApi service constructor.
    * @property {module:api/TutorApi}
    */
    TutorApi
};
