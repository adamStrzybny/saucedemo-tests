export class BookingAPI {
  private bookingId: number = 0;
  private token: string = '';

  createBooking(): this {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: {
        firstname: 'Adam',
        lastname: 'Strzybny',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-08-01',
          checkout: '2025-08-10',
        },
        additionalneeds: 'Breakfast',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      this.bookingId = res.body.bookingid;
    });

    return this;
  }

  authenticate(): this {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/auth',
      body: {
        username: 'admin',
        password: 'password123',
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      this.token = res.body.token;
    });

    return this;
  }

  updateBooking(): this {
    cy.then(() => {
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${this.bookingId}`,
        headers: {
          Cookie: `token=${this.token}`,
        },
        body: {
          firstname: 'Adam',
          lastname: 'Updated',
          totalprice: 222,
          depositpaid: false,
          bookingdates: {
            checkin: '2025-08-05',
            checkout: '2025-08-15',
          },
          additionalneeds: 'Lunch',
        },
      }).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.lastname).to.eq('Updated');
      });
    });

    return this;
  }

  deleteBooking(): this {
    cy.then(() => {
      cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${this.bookingId}`,
        headers: {
          Cookie: `token=${this.token}`,
        },
      }).then((res) => {
        expect(res.status).to.eq(201);
      });
    });

    return this;
  }
}
