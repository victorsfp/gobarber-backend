import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointments';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointmen = await this.findOne({
      where: {
        date,
      },
    });
    return findAppointmen || null;
  }
}

export default AppointmentsRepository;
