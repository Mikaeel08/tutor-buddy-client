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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StudentTutorBookingManagementSystem);
  }
}(this, function(expect, StudentTutorBookingManagementSystem) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StudentTutorBookingManagementSystem.AdminApi();
  });

  describe('(package)', function() {
    describe('AdminApi', function() {
      describe('authenticateAdmin', function() {
        it('should call authenticateAdmin successfully', function(done) {
          // TODO: uncomment, update parameter values for authenticateAdmin call and complete the assertions
          /*

          instance.authenticateAdmin(email, password, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.AdminDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createAdmin', function() {
        it('should call createAdmin successfully', function(done) {
          // TODO: uncomment, update parameter values for createAdmin call and complete the assertions
          /*

          instance.createAdmin(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.AdminDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('createUser', function() {
        it('should call createUser successfully', function(done) {
          // TODO: uncomment, update parameter values for createUser call and complete the assertions
          /*

          instance.createUser(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.UserDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAdmin', function() {
        it('should call deleteAdmin successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAdmin call
          /*

          instance.deleteAdmin(adminId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteUser', function() {
        it('should call deleteUser successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteUser call
          /*

          instance.deleteUser(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAdminById', function() {
        it('should call getAdminById successfully', function(done) {
          // TODO: uncomment, update parameter values for getAdminById call and complete the assertions
          /*

          instance.getAdminById(adminId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.AdminDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllAdmins', function() {
        it('should call getAllAdmins successfully', function(done) {
          // TODO: uncomment getAllAdmins call and complete the assertions
          /*

          instance.getAllAdmins(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StudentTutorBookingManagementSystem.AdminDTO);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAllUsers', function() {
        it('should call getAllUsers successfully', function(done) {
          // TODO: uncomment getAllUsers call and complete the assertions
          /*

          instance.getAllUsers(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(StudentTutorBookingManagementSystem.UserDTO);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getUserById', function() {
        it('should call getUserById successfully', function(done) {
          // TODO: uncomment, update parameter values for getUserById call and complete the assertions
          /*

          instance.getUserById(userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.UserDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAdmin', function() {
        it('should call updateAdmin successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAdmin call and complete the assertions
          /*

          instance.updateAdmin(body, adminId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.AdminDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateUser', function() {
        it('should call updateUser successfully', function(done) {
          // TODO: uncomment, update parameter values for updateUser call and complete the assertions
          /*

          instance.updateUser(body, userId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(StudentTutorBookingManagementSystem.UserDTO);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
